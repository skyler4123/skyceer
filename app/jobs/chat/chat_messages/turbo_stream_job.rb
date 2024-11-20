class Chat::ChatMessages::TurboStreamBroadcastJob < ApplicationJob
  queue_as :turbo_stream_chat_messages_broadcast

  def perform(chat_message_id)
    chat_message = ChatMessage.find(chat_message_id)
    chat_conversation = chat_message.chat_conversation
    Turbo::StreamsChannel.broadcast_append_to(
      chat_conversation.id,
      target: chat_conversation.id,
      html: ApplicationController.render(Views::Chat::MessageComponent.new(user_id: chat_message.user_id, content: chat_message.content), layout: false)
    )
  end
end
