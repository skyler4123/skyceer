# frozen_string_literal: true

class AccordionComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    is_open: nil,
    event: nil,
    id: nil,

    accordion_direction: nil,

    klass: nil,
    content_class: nil,
    grid_class: nil,
    klass_default: nil,
    content_class_default: nil,
    grid_class_default: nil,
    **rest_data_attributes
    )
    @controller = "accordion-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @is_open = is_open
    @event = event
    @id = id

    @accordion_direction = accordion_direction
    
    @klass = klass
    @content_class = content_class
    @grid_class = grid_class
    @klass_default = klass_default
    @content_class_default = content_class_default
    @grid_class_default = grid_class_default
    @rest_data_attributes = rest_data_attributes
    
    if @event && @event[:action]
      @event[:action] = @event[:action].to_s.camelize(:lower) 
    end
  end
end
