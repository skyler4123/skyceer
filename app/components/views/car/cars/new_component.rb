# frozen_string_literal: true

class Views::Car::Cars::NewComponent < ApplicationComponent
  def call
    content_tag :div, "Hello world!", data: { controller: "views--car--cars--new" } do
      content
    end
  end

end
