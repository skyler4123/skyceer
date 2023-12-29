# frozen_string_literal: true

class TextComponent < ViewComponent::Base
  renders_one :before
  renders_one :after

  def initialize(label: nil, klass: nil, language_key: nil)
    @label = label
    @klass = klass
    @language_key =language_key
  end
end
