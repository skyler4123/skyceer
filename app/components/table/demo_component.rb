# frozen_string_literal: true

class Table::DemoComponent < ViewComponent::Base
  def initialize(
    klass: nil,
    header: ['header 1', 'header 2', 'header 3'] ,
    body: [['1','2','3'], ['4','5','6'], ['7','8','9']]
  )
    @klass = klass.to_s + ' hidden'
    @header = header
    @body = body
  end
end
