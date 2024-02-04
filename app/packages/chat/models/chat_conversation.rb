class ChatConversation
  include Mongoid::Document
  include Mongoid::Timestamps

  field :chat_user_ids, type: Array
  # has_and_belongs_to_many :chat_users
  embeds_many :chat_messages
end
