# frozen_string_literal: true

class Input::FloatingStandardComponent < ViewComponent::Base
  def initialize(label: "Floating Standard", name: nil)
    @label = label
    @name = name
  end
end
