module User::ElasticsearchConcern
  extend ActiveSupport::Concern
  
  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks

    settings index: { number_of_shards: 1 } do
      mappings dynamic: 'false' do
        indexes :name, analyzer: 'english', index_options: 'offsets'
        indexes :email, analyzer: 'snowball'
        # Do not index verified
        indexes :verified, index: false
      end
    end

    def raw_title
      'raw title'
    end
  
    def as_indexed_json(options={})
      as_json(only: 'id')
    end

    after_save    { Elasticsearch::IndexerJob.perform_later(:index,  self.id, self.class.name) }
    after_destroy { Elasticsearch::IndexerJob.perform_later(:delete, self.id, self.class.name) }
  end

  # def self.search(query)
  #   # ...
  # end
end