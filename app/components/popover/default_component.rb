# frozen_string_literal: true

class Popover::DefaultComponent < ViewComponent::Base
  def initialize(klass: nil, content_class: nil, position: nil)
    @klass = klass
    @content_class = content_class
    @position = position
  end
end
