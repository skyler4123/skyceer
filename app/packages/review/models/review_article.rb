class ReviewArticle
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :content, type: Hash
  
  belongs_to :review_user
  embeds_many :review_comments

  index({ chat_user_ids: '2d' }, { unique: true })

end
