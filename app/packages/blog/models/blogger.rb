class Blogger
  include Mongoid::Document
  include Mongoid::Timestamps
  field :nickname, type: String
  field :user_id, type: String

  has_many :blogs, dependent: :destroy
  
  def user
    User.where(id: self.user_id)
  end
end
