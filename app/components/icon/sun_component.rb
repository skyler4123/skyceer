# frozen_string_literal: true

class Icon::SunComponent < ViewComponent::Base
  def initialize(klass: nil, svg_class: nil)
    @klass = klass
    @svg_class = svg_class
  end
end
