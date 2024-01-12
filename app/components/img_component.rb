# frozen_string_literal: true

class ImgComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    src: nil,
    url: nil,
    alt: nil,

    klass: nil,
    img_class: nil,
    klass_default: nil,
    img_class_default: nil,
    **rest_data_attributes
  )
    @controller = "img-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @url = url || src
    @alt = alt

    @klass = klass
    @img_class = img_class
    @klass_default = klass_default
    @img_class_default = img_class_default
    @rest_data_attributes = rest_data_attributes
  end
end