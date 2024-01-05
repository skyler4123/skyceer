# frozen_string_literal: true

class BoxComponent < ViewComponent::Base
  def initialize(id: nil, klass: nil)
    @id = id
    @klass = klass
  end
end
