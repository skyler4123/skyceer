# frozen_string_literal: true

class TurboStreams::ChatMessageComponent < ApplicationComponent
  def initialize(chat_message:)
    @chat_message = chat_message
  end
end
