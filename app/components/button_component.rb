# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  extend T::Sig

  renders_many :prepends
  renders_many :appends
  renders_one :body
  renders_many :hiddens

  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    label: nil,
    src: nil,
    url: nil,

    klass: nil,
    content_class: nil,
    button_class: nil,
    link_class: nil,
    klass_default: nil,
    content_class_default: nil,
    button_class_default: nil,
    link_class_default: nil,
    **rest_data_attributes
  )
    @controller = "button-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @label = label
    @url = url || src
    
    @klass = klass
    @content_class = content_class
    @button_class = button_class
    @link_class = link_class
    @klass_default = klass_default
    @content_class_default = content_class_default
    @button_class_default = button_class_default
    @link_class_default = link_class_default
    @rest_data_attributes = rest_data_attributes
    
    @event[:action] = @event[:action].camelize(:lower) if @event[:action]
  end
end
