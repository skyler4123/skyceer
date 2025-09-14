# app/models/chat_message.rb
class ChatMessage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :nosql_user_id, type: String
  field :content, type: String

  embedded_in :chat_conversation

  # Validations
  validates :nosql_user_id, presence: true
  validates :content, presence: true, length: { maximum: 1000 }
  validate :user_must_be_participant

  # Callbacks
  after_create :broadcast_message

  private

  def user_must_be_participant
    return unless chat_conversation && nosql_user_id.present?

    unless chat_conversation.nosql_user_ids.include?(nosql_user_id)
      errors.add(:nosql_user_id, "must be a participant in this conversation")
    end
  end

  def broadcast_message
    Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: self.chat_conversation.id, html: braodcast_html)
  end

  def braodcast_html
    ApplicationController.render(
      Chat::MessageComponent.new(nosql_user_id: self.nosql_user_id, message_content: self.content),
      layout: false
    )
  end
end
