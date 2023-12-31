# frozen_string_literal: true

class AccordionComponent < ViewComponent::Base
  renders_one :header
  renders_one :body

  def initialize(
    label: nil,
    position: nil,
    klass: nil,
    header_class: nil,
    body_class: nil,
    grid_class: nil
    )
    @label = label
    @position = position
    @klass = klass
    @header_class = header_class
    @body_class = body_class
    @grid_class = grid_class
  end
end
