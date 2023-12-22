# frozen_string_literal: true

class HorizontalLine::TextComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  def initialize(
    klass: nil,
    label: nil,
    label_class: nil,
    hr_class: nil,
    span_class: nil
    )
    @klass = klass.to_s + ' hidden'
    @label = label
    @label_class = label_class
    @hr_class = hr_class
    @span_class = span_class
  end
end
