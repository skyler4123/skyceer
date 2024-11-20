# frozen_string_literal: true

class Views::Chat::MessageComponent < ApplicationComponent

  erb_template <<-ERB
      <%= [@user_id, @message_content] %>
  ERB

  def initialize(user_id:, message_content:)
    @user_id = user_id
    @message_content = message_content
  end
  # def call
  #   content_tag :h1, "Hello world!", data: { controller: "views--chat--message-component" }
  # end

end
