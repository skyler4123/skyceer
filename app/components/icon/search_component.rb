# frozen_string_literal: true

class Icon::SearchComponent < ViewComponent::Base
  def initialize(svg_class: "w-4 h-4")
    @svg_class = svg_class
  end
end
