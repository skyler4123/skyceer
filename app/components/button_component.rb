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
      klass: nil,
      id: nil,
      controller: self.class.name.underscore.dasherize
      )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
    @id = id
    @controller = controller
  end
end
