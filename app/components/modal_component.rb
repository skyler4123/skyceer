# frozen_string_literal: true

class ModalComponent < ViewComponent::Base
  def initialize(
    id: nil,
    klass: nil,
    background_class: nil,
    content_class: nil,
    defaul_klass: nil,
    defaul_background_class: nil,
    defaul_content_class: nil
  )
    @id = id
    @klass = klass
    @background_class = background_class
    @content_class = content_class
    @defaul_klass = defaul_klass
    @defaul_background_class = defaul_background_class
    @defaul_content_class = defaul_content_class
  end
end
