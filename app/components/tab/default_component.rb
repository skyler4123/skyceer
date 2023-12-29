# frozen_string_literal: true

class Tab::DefaultComponent < ViewComponent::Base
  renders_one :headers
  renders_one :bodies

  def initialize(klass: nil, headers_class: nil, header_class: nil, bodies_class: nil, body_class: nil)
    @klass = klass
    @headers_class = headers_class
    @header_class = header_class
    @bodies_class = bodies_class
    @body_class = body_class
  end
end
