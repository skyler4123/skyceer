# frozen_string_literal: true

class Views::Chat::MessageComponent < ApplicationComponent

  erb_template <<-ERB
      <%= [@host_session_id, @message_content] %>
  ERB

  def initialize(host_session_id:, message_content:)
    @host_session_id = host_session_id
    @message_content = message_content
  end
  # def call
  #   content_tag :h1, "Hello world!", data: { controller: "views--chat--message-component" }
  # end

end
