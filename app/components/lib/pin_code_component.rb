# frozen_string_literal: true

class Lib::PinCodeComponent < ApplicationComponent
  def initialize(klass: nil)
    @klass = 'hidden ' + klass.to_s
  end
end
