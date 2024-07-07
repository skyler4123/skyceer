class ArticlePost
  include Mongoid::Document
  include Mongoid::Timestamps
  include Elasticsearch::Model
  
  field :package, type: String
  field :title, type: String
  field :content, type: Hash
  
  belongs_to :article_user
  embeds_many :article_comments

  index({ chat_user_ids: '2d' }, { unique: true })
  index({ package: 1 }, { unique: false })
end
