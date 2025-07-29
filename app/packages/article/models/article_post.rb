class ArticlePost
  include Mongoid::Document
  include Mongoid::Timestamps

  # include ArticlePost::ElasticsearchConcern
  include ArticlePost::ImagesConcern
  
  # field :user_id, type: String
  field :title, type: String
  field :content, type: Hash
  field :teaser, type: String
  field :categories, type: Array, default: []

  belongs_to :nosql_user
  embeds_many :article_comments

  validates :title, presence: true
  validates :content, presence: true

  def raw_content
    blocks = self.content.with_indifferent_access
    blocks[:blocks].pluck(:data).pluck(:text).join("")
  end

  def content_as_html
    EditorjsToHtmlService.convert(content)
  end

  def user
    nosql_user
  end
end
