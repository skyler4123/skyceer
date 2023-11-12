# frozen_string_literal: true

class Badge::DefaultComponent < ViewComponent::Base
  renders_one :icon
  
  def initialize(label: "Badge", color: :blue)
    @label = label
    @color = color.to_sym
  end
end