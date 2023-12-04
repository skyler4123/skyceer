# frozen_string_literal: true

class Accordion::BlockComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  renders_one :body
  
  def initialize(label: "Accordion Header")
    @label = label
  end
end
