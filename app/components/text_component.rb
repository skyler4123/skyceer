# frozen_string_literal: true

class TextComponent < ViewComponent::Base
  renders_one :before
  renders_one :after

  def initialize(
    controller: nil,
    action: nil,
    id: nil,
    label: nil,
    language_name: nil,
    language_key: nil,
    klass: nil,
    text_class: nil,
    klass_default: nil,
    text_class_default: nil,
    **rest_data_attributes
  )
    @controller = "text-component" + ' ' + controller.to_s
    @action = action
    @id = id
    @label = label
    @language_name = language_name
    @language_key = language_key
    @klass = klass
    @text_class = text_class
    @klass_default = klass_default
    @text_class_default = text_class_default
    @rest_data_attributes = rest_data_attributes
  end
end
