class ArticleComment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: String
  field :content, type: String
  
  embedded_in :article_post
end
