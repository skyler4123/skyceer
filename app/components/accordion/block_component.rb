# frozen_string_literal: true

class Accordion::BlockComponent < ViewComponent::Base
  def initialize(label: "Accordion Header")
    @label = label
  end
end
