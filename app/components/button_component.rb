# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  renders_one :body
  
  def initialize(
      label: "Button",
      url: nil,
      button_class: nil,
      link_class: nil,
      klass: nil
    )
    @label = label
    @url = url
    @klass = klass
    @link_class = link_class
    @button_class = button_class
  end
end
