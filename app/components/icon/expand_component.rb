# frozen_string_literal: true

class Icon::ExpandComponent < ViewComponent::Base
  def initialize(svg_class: "w-4 h-4")
    @svg_class = svg_class
  end
end