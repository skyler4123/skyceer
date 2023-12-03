# frozen_string_literal: true

class Accordion::DefaultComponent < ViewComponent::Base
  def initialize(label: "Accordion name")
    @label = label
  end
end
