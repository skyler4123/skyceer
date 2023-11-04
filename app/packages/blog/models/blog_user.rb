# typed: false

class BlogUser
  extend T::Sig

  include Mongoid::Document
  include Mongoid::Timestamps
  field :nickname, type: String
  field :user_id, type: String

  # belongs_to :user, dependent: :destroy
  has_many :blogs, dependent: :destroy
  
  sig {returns(ActiveRecord::Relation)}
  def user
    User.where(id: self.user_id)
  end
end
