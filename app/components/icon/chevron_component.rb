# frozen_string_literal: true

class Icon::ChevronComponent < ViewComponent::Base
  def initialize(svg_class: nil, klass: nil, rotation: nil)
    @svg_class = svg_class
    @klass = klass
    @rotation = rotation
  end
end
