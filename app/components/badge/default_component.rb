# frozen_string_literal: true

class Badge::DefaultComponent < ViewComponent::Base  
  def initialize(klass: nil, label: "Badge Label", color: :blue, type: :default)
    @klass = klass.to_s + ' hidden'
    @label = label
    @color = color.to_sym
    @type = type.to_sym
  end
end
