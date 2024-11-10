# frozen_string_literal: true

class Views::Education::FooterComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--education--footer-component" }
  end
end
