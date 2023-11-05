class ChatRoom
  include Mongoid::Document
  include Mongoid::Timestamps

  field :chat_user_ids, type: Array
  embeds_many :chat_messages
end
