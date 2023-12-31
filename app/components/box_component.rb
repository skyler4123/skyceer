# frozen_string_literal: true

class BoxComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
