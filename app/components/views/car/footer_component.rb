# frozen_string_literal: true

class Views::Car::FooterComponent < ApplicationComponent
  def call
    content_tag :footer, "", data: { controller: "views--car--footer" }
  end

end
