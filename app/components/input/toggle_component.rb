# frozen_string_literal: true

class Input::ToggleComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    name: nil,
    
    klass: nil,
    klass_default: nil,
    content_class: nil,
    content_class_default: nil,
    toggle_class: nil,
    toggle_class_default: nil,
    **rest_data_attributes
  )
    @controller = "input--toggle-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @name = name

    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
    @toggle_class = toggle_class
    @toggle_class_default = toggle_class_default
    @rest_data_attributes = rest_data_attributes
    
    @event[:action] = @event[:action].to_s.camelize(:lower) if @event[:action]
  end
end
