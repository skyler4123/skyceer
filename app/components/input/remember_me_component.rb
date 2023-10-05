# frozen_string_literal: true

class Input::RememberMeComponent < ViewComponent::Base
  def initialize(fields: [], id: 'input--remember-me-component' + SecureRandom.hex(4))
    @fields = fields.map(&:to_s)
    @id = id
  end
end
