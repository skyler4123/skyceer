# frozen_string_literal: true

class Input::PinCodeComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = 'hidden ' + klass.to_s
  end
end
