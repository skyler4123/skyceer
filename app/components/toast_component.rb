# frozen_string_literal: true

class ToastComponent < ViewComponent::Base
  def initialize(
    klass: nil,
    content_class: nil,
    klass_default: nil,
    content_class_default: nil
  )
    @klass = klass
    @content_class = content_class
    @klass_default = klass_default
    @content_class_default = content_class_default
  end
end
