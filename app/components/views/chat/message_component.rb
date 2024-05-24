# frozen_string_literal: true

class Views::Chat::MessageComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--chat--message" }
  end

end
