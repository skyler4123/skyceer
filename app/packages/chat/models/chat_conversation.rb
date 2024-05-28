class ChatConversation
  include Mongoid::Document
  include Mongoid::Timestamps

  field :chat_user_ids, type: Array
  # has_and_belongs_to_many :chat_users
  embeds_many :chat_messages

  index({ chat_user_ids: '2d' }, { unique: true })

  before_create do |document|
    document.chat_user_ids = document.chat_user_ids.sort
  end
end
