# frozen_string_literal: true

class Views::Car::Cars::IndexComponent < ApplicationComponent
  def call
    content_tag :div, "Hello world!", data: { controller: "views--car--cars--index" } do
      content
    end
  end

end
