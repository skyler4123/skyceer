# frozen_string_literal: true

class IconsComponent < ViewComponent::Base
  def initialize(name:, svg_class: nil, klass: nil, rotation: nil)
    @name = name
    @svg_class = svg_class
    @klass = klass
    @rotation = rotation
  end
end
