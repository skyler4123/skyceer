# frozen_string_literal: true

class Indicator::SpinnerComponent < ViewComponent::Base
  def initialize(svg_class: nil, color: :blue)
    @svg_class = svg_class
    @color = color.to_sym
  end
end
