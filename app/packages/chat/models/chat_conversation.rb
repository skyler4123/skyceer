class ChatConversation
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_ids, type: Array
  # has_and_belongs_to_many :chat_users
  embeds_many :chat_messages

  index({ user_ids: '2d' }, { unique: true })

  before_create do |document|
    document.user_ids = document.user_ids.sort
  end
end
