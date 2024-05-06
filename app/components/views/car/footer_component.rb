# frozen_string_literal: true

class Views::Car::FooterComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--car--footer-component" }
  end

end
