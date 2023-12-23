# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(name:, type: nil, svg_class: nil, klass: nil)
    @name = name
    @type = type
    @svg_class = svg_class
    @klass = klass.to_s + ' hidden'
  end
end
