class ElasticsearchToOpensearchConverter
  def self.convert_es_legacy_to_opensearch2(params)
    converted = params.deep_dup

    # Convert facets to aggregations
    converted = convert_facets_to_aggregations(converted)

    # Convert old query structure
    converted = convert_legacy_query_structure(converted)

    # Convert old filter syntax
    converted = convert_legacy_filters(converted)

    # Convert deprecated parameters
    converted = convert_deprecated_params(converted)

    # Convert old script syntax
    converted = convert_legacy_scripts(converted)

    converted
  end

  private

  def self.convert_facets_to_aggregations(params)
    if params[:facets]
      params[:aggs] = {}

      params[:facets].each do |facet_name, facet_config|
        params[:aggs][facet_name] = convert_single_facet(facet_config)
      end

      params.delete(:facets)
    end

    params
  end

  def self.convert_single_facet(facet_config)
    case facet_config.keys.first
    when :terms
      convert_terms_facet(facet_config[:terms])
    when :date_histogram
      convert_date_histogram_facet(facet_config[:date_histogram])
    when :histogram
      convert_histogram_facet(facet_config[:histogram])
    when :range
      convert_range_facet(facet_config[:range])
    when :statistical
      convert_statistical_facet(facet_config[:statistical])
    when :filter
      convert_filter_facet(facet_config[:filter])
    else
      # Default fallback - try to convert as terms
      {
        terms: facet_config
      }
    end
  end

  def self.convert_terms_facet(terms_config)
    agg_config = {
      terms: {}
    }

    # Convert field
    agg_config[:terms][:field] = terms_config[:field] if terms_config[:field]

    # Convert size (was called 'size' in old facets too)
    agg_config[:terms][:size] = terms_config[:size] || 10

    # Convert order
    if terms_config[:order]
      case terms_config[:order]
      when 'count'
        agg_config[:terms][:order] = { "_count": "desc" }
      when 'term'
        agg_config[:terms][:order] = { "_key": "asc" }
      when 'reverse_count'
        agg_config[:terms][:order] = { "_count": "asc" }
      when 'reverse_term'
        agg_config[:terms][:order] = { "_key": "desc" }
      end
    end

    # Convert script field (old ES < 1.0 style)
    if terms_config[:script_field]
      agg_config[:terms][:script] = {
        source: terms_config[:script_field]
      }
      agg_config[:terms].delete(:field)
    end

    agg_config
  end

  def self.convert_date_histogram_facet(date_config)
    agg_config = {
      date_histogram: {}
    }

    # Convert field
    agg_config[:date_histogram][:field] = date_config[:field] if date_config[:field]

    # Convert interval to calendar_interval (OpenSearch 2.0 style)
    if date_config[:interval]
      interval = date_config[:interval]

      # Map old interval formats to new ones
      interval_mapping = {
        'year' => '1y',
        'month' => '1M',
        'week' => '1w',
        'day' => '1d',
        'hour' => '1h',
        'minute' => '1m',
        'second' => '1s'
      }

      mapped_interval = interval_mapping[interval] || interval

      # Determine if it's calendar or fixed interval
      calendar_intervals = %w[1y 1M 1w 1d year month week day]
      if calendar_intervals.include?(mapped_interval)
        agg_config[:date_histogram][:calendar_interval] = mapped_interval
      else
        agg_config[:date_histogram][:fixed_interval] = mapped_interval
      end
    end

    # Convert time_zone
    if date_config[:time_zone]
      agg_config[:date_histogram][:time_zone] = date_config[:time_zone]
    end

    agg_config
  end

  def self.convert_histogram_facet(hist_config)
    {
      histogram: {
        field: hist_config[:field],
        interval: hist_config[:interval]
      }
    }
  end

  def self.convert_range_facet(range_config)
    {
      range: {
        field: range_config[:field],
        ranges: range_config[:ranges] || []
      }
    }
  end

  def self.convert_statistical_facet(stat_config)
    if stat_config[:field]
      {
        stats: {
          field: stat_config[:field]
        }
      }
    else
      {
        extended_stats: {
          field: stat_config[:field] || stat_config[:fields]&.first
        }
      }
    end
  end

  def self.convert_filter_facet(filter_config)
    {
      filter: convert_legacy_filter_syntax(filter_config)
    }
  end

  def self.convert_legacy_query_structure(params)
    # Convert old query types that were common in ES < 1.0

    # Convert 'query_string' with old syntax
    if params.dig(:query, :query_string)
      query_string = params[:query][:query_string]

      # Convert old 'default_field' to 'fields'
      if query_string[:default_field] && !query_string[:fields]
        query_string[:fields] = [ query_string.delete(:default_field) ]
      end
    end

    # Convert old 'text' query to 'match'
    if params.dig(:query, :text)
      text_query = params[:query].delete(:text)
      params[:query][:match] = text_query
    end

    # Convert old 'field' query to 'match'
    if params.dig(:query, :field)
      field_query = params[:query].delete(:field)
      params[:query][:match] = field_query
    end

    # Convert old bool query structure
    if params.dig(:query, :bool)
      bool_query = params[:query][:bool]

      # Convert old 'must' array structure
      [ :must, :should, :must_not ].each do |clause|
        if bool_query[clause] && !bool_query[clause].is_a?(Array)
          bool_query[clause] = [ bool_query[clause] ]
        end
      end
    end

    params
  end

  def self.convert_legacy_filters(params)
    # Convert old filter syntax to new bool query structure
    if params[:filter] && !params.dig(:query, :bool)
      # Move filter to bool query
      original_query = params[:query]

      params[:query] = {
        bool: {
          must: original_query ? [ original_query ] : [ { match_all: {} } ],
          filter: [ convert_legacy_filter_syntax(params[:filter]) ]
        }
      }

      params.delete(:filter)
    elsif params[:filter] && params.dig(:query, :bool)
      # Add filter to existing bool query
      existing_filter = params[:query][:bool][:filter] || []
      existing_filter << convert_legacy_filter_syntax(params[:filter])
      params[:query][:bool][:filter] = existing_filter
      params.delete(:filter)
    end

    params
  end

  def self.convert_legacy_filter_syntax(filter)
    return filter unless filter.is_a?(Hash)

    # Convert old 'and' filter to bool must
    if filter[:and]
      return {
        bool: {
          must: filter[:and].map { |f| convert_legacy_filter_syntax(f) }
        }
      }
    end

    # Convert old 'or' filter to bool should
    if filter[:or]
      return {
        bool: {
          should: filter[:or].map { |f| convert_legacy_filter_syntax(f) },
          minimum_should_match: 1
        }
      }
    end

    # Convert old 'not' filter to bool must_not
    if filter[:not]
      return {
        bool: {
          must_not: [ convert_legacy_filter_syntax(filter[:not]) ]
        }
      }
    end

    # Convert old 'missing' filter to bool must_not exists
    if filter[:missing]
      return {
        bool: {
          must_not: [
            {
              exists: {
                field: filter[:missing][:field]
              }
            }
          ]
        }
      }
    end

    filter
  end

  def self.convert_legacy_scripts(params)
    # Convert old script syntax throughout the query
    convert_scripts_recursive(params)
  end

  def self.convert_scripts_recursive(obj)
    case obj
    when Hash
      obj.each do |key, value|
        if key.to_s.include?('script') && value.is_a?(String)
          # Convert old string script to new object format
          obj[key] = {
            source: value
          }
        else
          convert_scripts_recursive(value)
        end
      end
    when Array
      obj.each { |item| convert_scripts_recursive(item) }
    end

    obj
  end

  def self.convert_deprecated_params(params)
    # Remove or convert parameters that don't exist in OpenSearch 2.0

    # Remove old routing parameters
    params.delete(:routing) if params[:routing]

    # Convert old timeout format
    if params[:timeout] && params[:timeout].is_a?(Integer)
      params[:timeout] = "#{params[:timeout]}ms"
    end

    # Remove old search_type that's not supported
    params.delete(:search_type) if params[:search_type] == 'count'

    # Convert old from/size to new format (they're the same but validate)
    if params[:from] && params[:from] < 0
      params[:from] = 0
    end

    if params[:size] && params[:size] > 10000
      params[:size] = 10000  # OpenSearch default max
    end

    params
  end
end
