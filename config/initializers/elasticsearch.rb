config = {
  # host: ENV.fetch('ELASTICSEARCH_URL') { "http://localhost:9200/" },
  host: ENV.fetch('ELASTICSEARCH_HOST') { "localhost" },
  port: ENV.fetch('ELASTICSEARCH_PORT') { 9200 },
  # user: 'elastic',
  # password:'1yv5nX5kCciYRL-uvC1M',
  transport_options: {
    request: { timeout: 5 }
  },
}

if File.exist?("config/elasticsearch.yml")
  config.merge!(YAML.load_file("config/elasticsearch.yml").symbolize_keys)
end

Elasticsearch::Model.client = Elasticsearch::Client.new(config)
