# frozen_string_literal: true

class TabComponent < ViewComponent::Base
  renders_many :tabs
  
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    klass: nil,
    content_class: nil,
    tab_class: nil,
    klass_default: nil,
    content_class_default: nil,
    tab_class_default: nil,
    **rest_data_attributes
  )
    @controller = "tab-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @klass = klass
    @content_class = content_class
    @tab_class = tab_class
    @klass_default = klass_default
    @content_class_default = content_class_default
    @tab_class_default = tab_class_default
    @rest_data_attributes = rest_data_attributes
    
    if @event && @event[:action]
      @event[:action] = @event[:action].to_s.camelize(:lower) 
    end
  end
end
