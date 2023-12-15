# frozen_string_literal: true

class Popover::DefaultComponent < ViewComponent::Base
  def initialize(klass: 'bg-green-500 hidden w-96 h-fit', position: nil)
    @klass = klass
    @position = position
  end
end
