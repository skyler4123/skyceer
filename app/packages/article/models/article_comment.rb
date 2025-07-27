class ArticleComment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :nosql_user_id, type: String
  field :content, type: String

  embedded_in :article_post
  embeds_many :article_subcomments
end
