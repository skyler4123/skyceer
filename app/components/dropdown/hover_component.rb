# frozen_string_literal: true

class Dropdown::HoverComponent < ViewComponent::Base
  renders_one :header
  renders_one :body

  def initialize(
    label: "Dropdown Hover",
    klass: nil,
    button_class: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-2 py-2 text-center",
    icon_class: nil,
    body_class: nil
  )
    @label = label
    @klass = klass.to_s + " hidden"
    @button_class = button_class
    @icon_class = icon_class
    @body_class = body_class
  end
end
