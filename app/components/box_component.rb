# frozen_string_literal: true

class BoxComponent < ViewComponent::Base
  extend T::Sig

  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    tag: :div,
    style: nil,
    position: nil,

    klass: nil,
    klass_default: nil,
    content_class: nil,
    content_class_default: nil,
    **rest_data_attributes
  )
    @controller = "box-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @tag = tag
    @style = style
    @position = position

    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
    @rest_data_attributes = rest_data_attributes
    
    if @event && @event[:action]
      @event[:action] = @event[:action].to_s.camelize(:lower) 
    end
  end
end
