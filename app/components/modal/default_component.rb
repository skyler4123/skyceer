# frozen_string_literal: true

class Modal::DefaultComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer

  def initialize(
    klass: nil,
    background_class: 'bg-opacity-50 bg-gray-200',
    content_class: 'text-black'
  )
    @klass = klass
    @background_class = background_class
    @content_class = content_class
  end
end
