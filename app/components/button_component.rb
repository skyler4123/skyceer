# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  renders_one :body
  renders_many :hiddens
  
  def initialize(
      controller: nil,
      action: nil,
      id: nil,
      label: nil,
      url: nil,
      klass: nil,
      content_class: nil,
      button_class: nil,
      link_class: nil,
      klass_default: nil,
      content_class_default: nil,
      button_class_default: nil,
      link_class_default: nil,
      toggle_type: nil,
      event_listener: nil
    )
    @controller = "button-component" + controller.to_s
    @action = action
    @id = id
    @label = label
    @url = url
    @klass = klass
    @content_class = content_class
    @button_class = button_class
    @link_class = link_class
    @klass_default = klass_default
    @content_class_default = content_class_default
    @button_class_default = button_class_default
    @link_class_default = link_class_default
    @toggle_type = toggle_type
    @event_listener = event_listener
  end
end
