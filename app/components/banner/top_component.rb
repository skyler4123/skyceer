# frozen_string_literal: true

class Banner::TopComponent < ViewComponent::Base
  def initialize(klass: nil)
    @klass = klass
  end
end
