# frozen_string_literal: true

class List::UlComponent < ViewComponent::Base
  def initialize(header: nil, sortable: false)
    @header = header
    @sortable = sortable
  end
end
