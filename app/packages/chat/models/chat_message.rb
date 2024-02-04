class ChatMessage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :chat_user_id, type: String
  field :content, type: String

  embedded_in :chat_conversation

end
