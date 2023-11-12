# frozen_string_literal: true

class Icon::XComponent < ViewComponent::Base
  def initialize(x_class: "w-4 h-4 text-gray-500")
    @x_class = x_class
  end
end
