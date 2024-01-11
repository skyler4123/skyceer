# frozen_string_literal: true

class Form::SearchComponent < ViewComponent::Base
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
    @controller = "form--search-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
    @rest_data_attributes = rest_data_attributes
  end
end
