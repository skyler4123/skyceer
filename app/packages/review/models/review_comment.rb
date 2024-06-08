class ReviewComment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :review_user_id, type: String
  field :content, type: String
  
  embedded_in :review_article
end
