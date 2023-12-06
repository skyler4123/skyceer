# frozen_string_literal: true

class Accordion::DefaultComponent < ViewComponent::Base
  def initialize(label: "Accordion name", klass: nil)
    @label = label
    @klass = klass
  end
end
