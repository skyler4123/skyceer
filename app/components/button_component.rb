# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  
  def initialize(label: 'Button', url: "#", button_class: "", link_class: "", klass: "flex flex-row gap-x-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-medium py-3 px-5")
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
  end
end
