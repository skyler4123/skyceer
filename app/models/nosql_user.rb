class NosqlUser
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :user_id, type: String
  field :address_id, type: String
  field :email, type: String
  field :name, type: String
  field :avatar, type: String
  field :role, type: Integer
  field :education_role, type: Integer

  def user
    User.where(id: self.user_id)
  end

end
