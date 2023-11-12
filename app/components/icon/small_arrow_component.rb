# frozen_string_literal: true

class Icon::SmallArrowComponent < ViewComponent::Base
  def initialize(direction: :right, svg_class: "w-4 h-4 text-gray-500", klass: "flex justify-center items-center")
    @direction = direction.to_sym
    @svg_class = svg_class
    @klass = klass
  end
end
