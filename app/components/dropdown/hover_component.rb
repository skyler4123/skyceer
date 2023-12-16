# frozen_string_literal: true

class Dropdown::HoverComponent < ViewComponent::Base
  renders_one :header
  renders_one :body

  def initialize(label: "Dropdown Hover", klass: 'hidden')
    @label = label
    @klass = klass
  end
end
