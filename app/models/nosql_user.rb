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

  has_many :article_posts
  has_many :article_comments
  has_many :article_subcomments
  has_many :chat_conversations
  has_many :chat_messages

  def user
    User.where(id: self.user_id).first
  end

end
