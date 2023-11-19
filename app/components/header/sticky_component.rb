# frozen_string_literal: true

class Header::StickyComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
