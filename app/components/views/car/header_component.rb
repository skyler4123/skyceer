# frozen_string_literal: true

class Views::Car::HeaderComponent < ApplicationComponent
  def call
    content_tag :header, "", data: { controller: "views--car--header" }
  end

end
