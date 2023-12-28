# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  renders_one :body
  
  def initialize(
      label: 'Link',
      url: nil,
      link_class: nil,
      klass: nil
    )
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
  end
end
