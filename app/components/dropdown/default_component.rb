# frozen_string_literal: true

class Dropdown::DefaultComponent < ViewComponent::Base
  renders_one :header
  renders_one :body

  def initialize(
    label: nil,
    klass: nil,
    header_class: nil,
    body_class: nil,
    trigger_event: nil
  )
    @label = label
    @klass = klass
    @header_class = header_class
    @body_class = body_class
    @trigger_event = trigger_event
  end
end
