# frozen_string_literal: true

class ImgComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    action: nil,
    type: nil,
    id: nil,
    src: nil,
    url: nil,
    alt: nil,
    klass: nil,
    img_class: nil,
    klass_default: nil,
    img_class_default: nil
  )
    @controller = "img-component" + ' ' + controller.to_s
    @action = action
    @type = type
    @id = id
    @url = url || src
    @alt = alt
    @klass = klass
    @img_class = img_class
    @klass_default = klass_default
    @img_class_default = img_class_default
  end
end
