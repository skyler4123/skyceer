class ChatMessage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :chat_user_id, type: String
  field :content, type: String

  embedded_in :chat_conversation

  after_save do
    # broadcast_append_to('comments', target: 'comments', partial: 'comments/comment', locals: { comment: self })
    # Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', partial: 'chat_messages/chat_message', locals: { chat_message: self })
    # Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', html: ApplicationController.render(TurboStreams::ChatMessageComponent.new(chat_message: self)))
    # Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', html: TurboStreams::ChatMessageComponent.new(chat_message: self).render_in(ActionController::Base.new.view_context))
    Turbo::StreamsChannel.broadcast_append_to(self.chat_conversation.id, target: 'chat_messages', html: render_component)

  end

  def render_component
    # ApplicationController.render(TurboStreams::ChatMessageComponent.new(chat_message: self), layout: false)
    ApplicationController.render(Views::Chat::BoxComponent.new, layout: false)
  end
end
