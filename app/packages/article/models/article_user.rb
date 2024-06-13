class ArticleUser
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: String

  # has_and_belongs_to_many :chat_rooms
  has_many :article_posts
  has_many :article_comments

  def id_string
    self.id.to_s
  end

  def user
    User.where(id: self.user_id)
  end
end
