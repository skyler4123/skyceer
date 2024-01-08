# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(
    name: nil,
    type: nil,
    svg_html: nil,
    klass: nil,
    svg_class: nil,
    klass_default: nil,
    svg_class_default: nil
  )
    @name = name
    @type = type
    @svg_html = svg_html
    @klass = klass
    @svg_class = svg_class
    @klass_default = klass_default
    @svg_class_default = svg_class_default
  end
end
