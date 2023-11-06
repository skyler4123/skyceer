class ChatRoom
  include Mongoid::Document
  include Mongoid::Timestamps

  has_and_belongs_to_many :chat_users
  embeds_many :chat_messages
end
