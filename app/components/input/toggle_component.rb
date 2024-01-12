# frozen_string_literal: true

class Input::ToggleComponent < ViewComponent::Base
  def initialize(
    id: nil,
    name: nil,
    klass: nil,
    klass_default: nil,
    toggle_class: nil,
    toggle_class_default: nil,
    **rest_data_attributes
  )
    @id = id,
    @name = name,
    @klass = klass,
    @klass_default = klass_default,
    @toggle_class = toggle_class,
    @toggle_class_default = toggle_class_default,
    @rest_data_attributes = rest_data_attributes
  end
end
