# frozen_string_literal: true

class TabComponent < ViewComponent::Base
  renders_many :tabs
  
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    klass: nil,
    tab_class: nil,
    klass_default: nil,
    tab_class_default: nil,
    **rest_data_attributes
  )
    @controller = "tab-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @klass = klass
    @klass_default = klass_default
    @tab_class = tab_class
    @tab_class_default = tab_class_default
    @rest_data_attributes = rest_data_attributes
  end
end
