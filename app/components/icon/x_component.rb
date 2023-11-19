# frozen_string_literal: true

class Icon::XComponent < ViewComponent::Base
  def initialize(klass: nil, svg_class: "w-4 h-4")
    @klass = klass
    @svg_class = svg_class
  end
end
