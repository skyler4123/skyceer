# frozen_string_literal: true

class Dropdown::HoverComponent < ViewComponent::Base
  renders_one :before
  renders_one :after

  def initialize(label: "Dropdown")
    @label = label
  end
end
