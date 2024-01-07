# frozen_string_literal: true

class PopoverComponent < ViewComponent::Base
  def initialize(
    label: nil,
    position: nil,
    klass: nil,
    content_class: nil,
    klass_default: nil,
    content_class_default: nil
  )
    @label = label
    @position = position
    @klass = klass
    @content_class = content_class
    @klass_default = klass_default
    @content_class_default = content_class_default
  end
end
