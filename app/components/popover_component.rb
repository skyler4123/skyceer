# frozen_string_literal: true

class PopoverComponent < ViewComponent::Base
  def initialize(klass: nil, content_class: nil, position: nil, trigger_event: nil)
    @klass = klass
    @content_class = content_class
    @position = position
    @trigger_event = trigger_event
  end
end
