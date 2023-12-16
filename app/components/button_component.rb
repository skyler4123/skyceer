# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_one :before_label
  renders_one :after_label
  renders_many :prepends
  renders_many :appends
  
  def initialize(
      label: 'Button',
      url: nil,
      button_class: nil,
      link_class: nil,
      klass: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 active:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-2 py-2 text-center'
    )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass.to_s + ' hidden'
    @button_class = button_class
  end
end
