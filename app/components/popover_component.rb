# frozen_string_literal: true

class PopoverComponent < ViewComponent::Base
  def initialize(klass: nil, content_class: nil, position: nil, event_listener: nil)
    @klass = klass
    @content_class = content_class
    @position = position
    @event_listener = event_listener
  end
end
