# frozen_string_literal: true

class Chat::MessageComponent < ViewComponent::Base
  erb_template <<-ERB
      <%= [@nosql_user_id, @message_content] %>
  ERB

  def initialize(nosql_user_id:, message_content:)
    @nosql_user_id = nosql_user_id
    @message_content = message_content
  end
end
