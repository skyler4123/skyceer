# frozen_string_literal: true

class Input::RememberMeComponent < ViewComponent::Base
  def initialize(fields: [])
    @fields = fields.map(&:to_s)
  end
end
