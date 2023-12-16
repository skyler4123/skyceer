# frozen_string_literal: true

class Dropdown::HoverComponent < ViewComponent::Base
  renders_one :header
  renders_one :body

  def initialize(label: "Dropdown")
    @label = label
  end
end
