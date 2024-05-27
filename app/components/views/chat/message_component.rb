# frozen_string_literal: true

class Views::Chat::MessageComponent < ApplicationComponent

  erb_template <<-ERB
      <div data-chat-user-id="<%= @chat_message.chat_user_id %>"><%= @chat_message.content %></div>
    </<%= @tag %>>
  ERB

  def initialize(chat_message:)
    @chat_message = chat_message
  end
  # def call
  #   content_tag :h1, "Hello world!", data: { controller: "views--chat--message-component" }
  # end

end
