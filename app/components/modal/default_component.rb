# frozen_string_literal: true

class Modal::DefaultComponent < ViewComponent::Base
  def initialize(
    klass: nil,
    background_class: nil,
    content_class: nil
  )
    @klass = klass
    @background_class = background_class
    @content_class = content_class
  end
end
