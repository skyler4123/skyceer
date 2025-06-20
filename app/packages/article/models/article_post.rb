class ArticlePost
  include Mongoid::Document
  include Mongoid::Timestamps

  # include ArticlePost::ElasticsearchConcern
  include ArticlePost::ImagesConcern
  
  field :user_id, type: String
  field :title, type: String
  field :content, type: Hash
  
  embeds_many :article_comments

  index({ chat_user_ids: '2d' }, { unique: true })
  index({ package: 1 }, { unique: false })

  def raw_content
    blocks = self.content.with_indifferent_access
    blocks[:blocks].pluck(:data).pluck(:text).join("")
  end

end
