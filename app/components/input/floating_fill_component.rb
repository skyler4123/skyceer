# frozen_string_literal: true

class Input::FloatingFillComponent < ViewComponent::Base
  def initialize(label: "Floating Fill", name: nil)
    @label = label
    @name = name
  end
end
