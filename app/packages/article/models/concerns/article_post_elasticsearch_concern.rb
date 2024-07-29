module ArticlePostElasticsearchConcern
  extend ActiveSupport::Concern
  
  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    def raw_title
      'raw title'
    end
  
    def as_indexed_json(options={})
      as_json(only: 'id')
    end
    after_save    { Elasticsearch::IndexerJob.perform_later(:index,  self.id, self.class.name) }
    after_destroy { Elasticsearch::IndexerJob.perform_later(:delete, self.id, self.class.name) }
  end

  module ClassMethods
    # def find_by_user_id

    # end
  end
end