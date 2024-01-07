# frozen_string_literal: true

class BoxComponent < ViewComponent::Base
  def initialize(
    id: nil,
    klass: nil,
    klass_default: nil,
    content_class: nil,
    content_class_default: nil
  )
    @id = id
    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
  end
end
