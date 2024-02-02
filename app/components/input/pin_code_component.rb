# frozen_string_literal: true

class Input::PinCodeComponent < ApplicationComponent
  def initialize(klass: nil)
    @klass = 'hidden ' + klass.to_s
  end
end
