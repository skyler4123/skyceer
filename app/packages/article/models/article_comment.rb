class ArticleComment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :article_user_id, type: String
  field :content, type: String
  
  embedded_in :article_post
end
