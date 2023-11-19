# frozen_string_literal: true

class Dropdown::ClickComponent < ViewComponent::Base
  renders_one :head
  renders_one :body

  def initialize(label: "Dropdown")
    @label = label
  end
end
