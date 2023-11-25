# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  renders_one :indicator
  renders_one :copy_icon
  
  def initialize(
      label: 'Link',
      url: "#",
      button_class: nil,
      link_class: nil,
      klass: nil,
      id: nil,
      data: { controller: "" },
      has_copy_icon: false
    )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
    @id = id
    data[:controller] ||= ""
    data[:controller] += " link-component"
    data[:controller] = data[:controller].strip
    @data = data
    @has_copy_icon = has_copy_icon
  end
end
