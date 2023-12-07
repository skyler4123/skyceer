# frozen_string_literal: true

class Tooltip::DefaultComponent < ViewComponent::Base
  def initialize(
    klass: 'p-10 h-fit w-64 bg-red-500 transform bottom-0 left-0 translate-y-full text-black border border-gray-300 shadow rounded-md',
    arrow_class: nil
  )
    @klass = klass
    @arrow_class = arrow_class
  end
end
