# frozen_string_literal: true

class Input::FloatingOutlineComponent < ViewComponent::Base
  def initialize(label: "Floating Outline", name: nil)
    @label = label
    @name = name
  end
end
