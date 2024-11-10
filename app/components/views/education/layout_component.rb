# frozen_string_literal: true

class Views::Education::LayoutComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--education--layout-component" }
  end
end
