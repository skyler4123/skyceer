class ChatMessage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :chat_user_id, type: String
  field :content, type: String

  embedded_in :chat_conversation

  after_save :live
  def live
    Turbo::StreamsChannel.broadcast_append_to("chat_messages", html: ApplicationController.render(TurboStream::ChatMessageComponent.new), target: "chat_messages")
  end
end
