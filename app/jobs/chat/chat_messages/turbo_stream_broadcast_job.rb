class Chat::ChatMessages::TurboStreamBroadcastJob < ApplicationJob
  queue_as :turbo_stream_chat_messages_broadcast

  def perform(chat_conversation_id, user_id, content)
    Turbo::StreamsChannel.broadcast_append_to(
      chat_conversation_id,
      target: chat_conversation_id,
      html: ApplicationController.render(Chat::MessageComponent.new(user_id: user_id, message_content: content), layout: false)
    )
  end
end
