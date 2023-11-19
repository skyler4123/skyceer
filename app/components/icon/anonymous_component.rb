# frozen_string_literal: true

class Icon::AnonymousComponent < ViewComponent::Base
  def initialize(klass: nil, svg_class: nil)
    @klass = klass
    @svg_class = svg_class
  end
end
