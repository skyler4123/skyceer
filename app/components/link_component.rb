# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  
  def initialize(
      label: nil,
      url: nil,
      link_class: nil,
      klass: nil
    )
    @label = label
    @url = url
    @link_class = link_class
    @klass = 'hidden ' + klass.to_s
  end
end
