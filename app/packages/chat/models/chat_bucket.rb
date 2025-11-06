# app/models/chat_bucket.rb
class ChatBucket
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :chat_conversation

  embeds_many :chat_messages
end
