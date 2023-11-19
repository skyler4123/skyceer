# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  renders_one :before
  renders_one :after
  renders_one :indicator
  
  def initialize(
      label: 'Link',
      url: "#",
      button_class: "",
      link_class: nil,
      klass: nil,
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
    data[:controller] += " link-component"
    data[:controller] = data[:controller].strip
    @data = data
  end
end
