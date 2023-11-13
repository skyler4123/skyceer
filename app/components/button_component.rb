# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  
  def initialize(label: 'Link', url: "#", button_class: "", link_class: "", klass: "")
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
  end
end
