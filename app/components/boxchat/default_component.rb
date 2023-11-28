# frozen_string_literal: true

class Boxchat::DefaultComponent < ViewComponent::Base
  def initialize(klass: nil, data: {})
    @klass = klass
    data[:controller] ||= " "
    data[:controller] += "boxchat--default-component"
    data[:controller] = data[:controller].strip
    @data = data
  end
end
