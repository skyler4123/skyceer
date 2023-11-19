# frozen_string_literal: true

class Indicator::DotComponent < ViewComponent::Base
  def initialize(color: :green, number: 99)
    @color = color.to_sym
    @number = number.to_i
  end
end
