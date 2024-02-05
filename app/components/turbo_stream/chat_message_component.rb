# frozen_string_literal: true

class TurboStream::ChatMessageComponent < ApplicationComponent
  def initialize(chat_message:)
    @chat_message = chat_message
  end
end
