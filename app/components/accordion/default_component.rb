# frozen_string_literal: true

class Accordion::DefaultComponent < ViewComponent::Base
  renders_many :blocks
  renders_one :separator
  
  def initialize(
    label: "Accordion name",
    klass: nil
    )
    @label = label
    @klass = klass
  end
end
