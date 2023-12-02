# frozen_string_literal: true

class Header::NormalComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
