# frozen_string_literal: true

class Hr::TextComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  def initialize(
    klass: nil,
    label: "Horizontal Line",
    hr_class: nil,
    span_class: nil
    )
    @klass = klass
    @label = label
    @hr_class = hr_class
    @span_class = span_class
  end
end
