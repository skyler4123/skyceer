class ChatUser
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: String

  # has_and_belongs_to_many :chat_rooms

  def id_string
    self.id.to_s
  end

  def user
    User.where(id: self.user_id)
  end

end
