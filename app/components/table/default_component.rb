# frozen_string_literal: true

class Table::DefaultComponent < ViewComponent::Base
  def initialize(
    header: ['header 1', 'header 2', 'header 3'],
    body: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    klass: 'bg-green-500',
    table_class: 'bg-red-500 p-2',
    header_class: 'bg-blue-500',
    body_class: 'bg-yellow-500'
  )
    @header = header
    @body = body
    @klass = klass
    @table_class = table_class
    @header_class = header_class
    @body_class = body_class
  end
end
