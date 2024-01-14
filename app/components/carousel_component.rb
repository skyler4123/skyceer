# frozen_string_literal: true

class CarouselComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    klass: nil,
    klass_default: nil,
    content_class: nil,
    content_class_default: nil,
    **rest_data_attributes
  )
    @controller = "carousel-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
    @rest_data_attributes = rest_data_attributes
    
    @event[:action] = @event[:action].to_s.camelize(:lower) if @event[:action]
  end
end
