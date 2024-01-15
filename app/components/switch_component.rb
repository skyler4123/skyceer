# frozen_string_literal: true

class SwitchComponent < ViewComponent::Base
  renders_many :switches
  
  def initialize(
    controller: nil,
    controller_action: nil,
    is_open: nil,
    event: nil,
    id: nil,

    klass: nil,
    switch_class: nil,
    klass_default: nil,
    switch_class_default: nil,
    **rest_data_attributes
  )
    @controller = "switch-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @is_open = is_open
    @event = event
    @id = id

    @klass = klass
    @klass_default = klass_default
    @switch_class = switch_class
    @switch_class_default = switch_class_default
    @rest_data_attributes = rest_data_attributes
    
    if @event && @event[:action]
      @event[:action] = @event[:action].to_s.camelize(:lower) 
    end
  end
end
