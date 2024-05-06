# frozen_string_literal: true

class Views::UserComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--user-component" }
  end

end
