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
      klass: 'hidden text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
      )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
  end
end
