# frozen_string_literal: true

class Accordion::GroupComponent < ViewComponent::Base
  renders_many :accordions
  renders_one :separator
  
  def initialize(
    label: "Accordion name",
    klass: nil
    )
    @label = label
    @klass = klass
  end
end
