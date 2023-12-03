# frozen_string_literal: true

class Popover::BottomComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
