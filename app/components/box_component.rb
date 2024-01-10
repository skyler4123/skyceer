# frozen_string_literal: true

class BoxComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    action: nil,
    event_listener: nil,
    event_id: nil,
    id: nil,


    klass: nil,
    klass_default: nil,
    content_class: nil,
    content_class_default: nil,
    **rest_data_attributes
  )
    @controller = "box-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @action = action
    @event_listener = event_listener
    @event_id = event_id
    @id = id

    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
    @rest_data_attributes = rest_data_attributes
  end
end
