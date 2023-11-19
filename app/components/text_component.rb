# frozen_string_literal: true

class TextComponent < ViewComponent::Base
  renders_one :before
  renders_one :after

  def initialize(label: "TextComponent Sample!", klass: nil)
    @label = label
    @klass = klass
  end
end
