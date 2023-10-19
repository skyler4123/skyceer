class Blogger
  include Mongoid::Document
  include Mongoid::Timestamps
  field :nickname, type: String
  field :user_id, type: String

  def user
    User.where(id: self.user_id)
  end
end
