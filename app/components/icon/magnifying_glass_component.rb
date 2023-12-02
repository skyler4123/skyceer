# frozen_string_literal: true

class Icon::MagnifyingGlassComponent < ViewComponent::Base
  def initialize(svg_class: nil, klass: nil)
    @svg_class = svg_class
    @klass = klass
  end
end
