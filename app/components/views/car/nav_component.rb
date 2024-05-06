# frozen_string_literal: true

class Views::Car::NavComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--car--nav-component" }
  end

end
