# frozen_string_literal: true

class HorizontalLine::TextComponent < ViewComponent::Base
  def initialize(label: "Horizontal Line (Text)")
    @label = label
  end
end
