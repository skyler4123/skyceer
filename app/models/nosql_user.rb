class NosqlUser
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :user_id, type: String
  field :username, type: String
  field :uid, type: String
  field :phone_number, type: String
  field :country_code, type: String
  field :address_id, type: String
  field :email, type: String
  field :name, type: String
  field :first_name, type: String
  field :last_name, type: String
  field :avatar, type: String
  field :role, type: Integer
  field :education_role, type: Integer
  field :verified, type: Boolean
  field :discarded_at, type: DateTime

  def user
    User.where(id: self.user_id)
  end

end
