# frozen_string_literal: true

class HorizontalLine::TextComponent < ViewComponent::Base
  def initialize(
    klass: nil,
    label: nil,
    label_class: nil,
    horizontal_line_class: nil
    )
    @klass = klass.to_s + ' hidden'
    @label = label
    @label_class = label_class
    @horizontal_line_class = horizontal_line_class
  end
end
