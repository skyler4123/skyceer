# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    name: nil,
    type: nil,
    svg_html: nil,

    klass: nil,
    svg_class: nil,
    klass_default: nil,
    svg_class_default: nil,
    **rest_data_attributes
  )
    @controller = "icon-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id
    
    @name = name
    @type = type
    @svg_html = svg_html

    @klass = klass
    @svg_class = svg_class
    @klass_default = klass_default
    @svg_class_default = svg_class_default
    @rest_data_attributes = rest_data_attributes
  end
end
