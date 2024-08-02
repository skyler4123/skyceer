class ArticlePost
  include Mongoid::Document
  include Mongoid::Timestamps

  field :package, type: String
  field :title, type: String
  field :content, type: Hash
  
  belongs_to :article_user
  embeds_many :article_comments

  index({ chat_user_ids: '2d' }, { unique: true })
  index({ package: 1 }, { unique: false })

  # include Elasticsearch::Model
  # include Elasticsearch::Model::Callbacks
  # def raw_title
  #   'raw title'
  # end

  # def as_indexed_json(options={})
  #   as_json(only: 'id')
  # end
  # after_save    { Elasticsearch::IndexerJob.perform_later(:index,  self.id, self.class.name) }
  # after_destroy { Elasticsearch::IndexerJob.perform_later(:delete, self.id, self.class.name) }
end
