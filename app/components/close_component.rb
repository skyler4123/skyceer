# frozen_string_literal: true

class CloseComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
