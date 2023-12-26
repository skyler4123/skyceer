# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(name: nil, type: nil, svg_class: nil, klass: nil)
    @name = name
    @type = type
    @svg_class = svg_class
    @klass = 'hidden ' + klass.to_s
  end
end
