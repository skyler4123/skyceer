# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  renders_one :indicator
  renders_many :effects
  
  def initialize(
      label: 'Button',
      url: nil,
      button_class: nil,
      link_class: nil,
      klass: nil
      )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
  end
end
