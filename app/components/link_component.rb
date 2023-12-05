# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  renders_one :indicator
  renders_one :copy_icon
  renders_many :effects
  
  def initialize(
      label: 'Link',
      url: '#',
      button_class: 'font-medium text-blue-600 hover:underline',
      link_class: nil,
      klass: nil,
      has_copy_icon: false
      )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
    @has_copy_icon = has_copy_icon
  end
end
