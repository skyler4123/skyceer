class ChatMessage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: String
  field :content, type: String

  embedded_in :chat_conversation

  after_save do
    # broadcast_append_to('comments', target: 'comments', partial: 'comments/comment', locals: { comment: self })
    # Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', partial: 'chat_messages/chat_message', locals: { chat_message: self })
    # Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', html: ApplicationController.render(TurboStreams::ChatMessageComponent.new(chat_message: self)))
    # Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', html: TurboStreams::ChatMessageComponent.new(chat_message: self).render_in(ActionController::Base.new.view_context))
    Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: self.chat_conversation.id, html: render_component)
    # Chat::ChatMessages::TurboStreamBroadcastJob.perform_later(self.chat_conversation.id, self.user_id, self.content)
  end

  def render_component
    ApplicationController.render(Chat::MessageComponent.new(user_id: self.user_id, message_content: self.content), layout: false)
  end
end
