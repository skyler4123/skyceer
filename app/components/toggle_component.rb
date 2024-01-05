# frozen_string_literal: true

class ToggleComponent < ViewComponent::Base
  def initialize(id: nil, klass: nil, type: nil, target_id: nil, target_controller_name: nil)
    @id = id
    @klass = klass

    @type = type
    @target_id = target_id
    @target_controller_name = target_controller_name
  end
end
