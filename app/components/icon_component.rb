# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(name:, type: nil, svg_class: nil, klass: 'hidden', rotation: nil)
    @name = name
    @type = type
    @svg_class = svg_class
    @klass = klass
    @rotation = rotation
  end
end
