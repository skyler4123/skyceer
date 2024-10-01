module ArticlePost::ElasticsearchConcern
  extend ActiveSupport::Concern
  
  included do
    include Elasticsearch::Model
    # include Elasticsearch::Model::Callbacks
    def raw_title
      'raw title'
    end
  
    def as_indexed_json(options={})
      as_json(
        only: [:package, :title],
        methods: [:raw_content]
      )
    end
    after_save    { Elasticsearch::IndexerJob.perform_later(:index,  self.id, self.class.name) }
    after_destroy { Elasticsearch::IndexerJob.perform_later(:delete, self.id, self.class.name) }
  end

  # def self.search(query)
  #   # ...
  # end
end