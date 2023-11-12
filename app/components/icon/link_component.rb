# frozen_string_literal: true

class Icon::LinkComponent < ViewComponent::Base
  def initialize(svg_class: "w-4 h-4 text-gray-500")
    @svg_class = svg_class
  end
end
