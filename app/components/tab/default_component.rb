# frozen_string_literal: true

class Tab::DefaultComponent < ViewComponent::Base
  renders_one :headers
  renders_one :bodies

  def initialize(
    controller: nil,
    event_action: nil,
    klass: nil,
    headers_class: nil,
    header_class: nil,
    bodies_class: nil,
    body_class: nil
  )
    @controller = "tab--default-component" + ' ' + controller.to_s
    @event_action = event_action
    @klass = klass
    @headers_class = headers_class
    @header_class = header_class
    @bodies_class = bodies_class
    @body_class = body_class
  end
end
