# frozen_string_literal: true

class Icon::DotComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
