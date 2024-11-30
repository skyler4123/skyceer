# frozen_string_literal: true

class Chat::MessageComponent < ViewComponent::Base
  erb_template <<-ERB
      <%= [@user_id, @message_content] %>
  ERB

  def initialize(user_id:, message_content:)
    @user_id = user_id
    @message_content = message_content
  end
end
