# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  renders_one :indicator
  
  def initialize(
      label: 'Button',
      url: "#",
      button_class: "",
      link_class: "",
      klass: "flex flex-row gap-x-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-medium p-3",
      id: nil,
      data: { controller: "" }
      )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
    @id = id
    data[:controller] ||= ""
    data[:controller] += " button-component"
    data[:controller] = data[:controller].strip
    @data = data
  end
end
