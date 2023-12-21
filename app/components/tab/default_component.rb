# frozen_string_literal: true

class Tab::DefaultComponent < ViewComponent::Base
  renders_one :headers
  renders_one :bodies

  def initialize(klass: nil, headers_class: nil, bodies_class: nil)
    @klass = klass.to_s + ' hidden'
    @headers_class = headers_class
    @bodies_class = bodies_class
  end
end
