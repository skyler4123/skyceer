# frozen_string_literal: true

class Accordion::BlockComponent < ViewComponent::Base
  renders_one :header
  renders_one :body

  
  def initialize(
    label: nil,
    label_class: nil,
    klass: nil,
    header_class: nil,
    body_class: nil
    )
    @label = label
    @label_class = label_class
    @klass = klass
    @header_class = header_class
    @body_class = body_class
  end
end
