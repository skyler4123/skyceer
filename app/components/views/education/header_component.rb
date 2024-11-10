# frozen_string_literal: true

class Views::Education::HeaderComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--education--header-component" }
  end
end
