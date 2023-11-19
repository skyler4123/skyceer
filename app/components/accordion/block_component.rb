# frozen_string_literal: true

class Accordion::BlockComponent < ViewComponent::Base
  renders_one :head
  renders_one :body

  def initialize(label: "Accordion Label Sample")
    @label = label
  end
end
