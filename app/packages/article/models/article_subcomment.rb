class ArticleSubcomment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :nosql_user_id, type: String
  field :content, type: String

  embedded_in :article_comment
end
