# frozen_string_literal: true

class Views::Car::SearchComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--car--search-component" }
  end

end
