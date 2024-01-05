# frozen_string_literal: true

class ToggleComponent < ViewComponent::Base
  def initialize(klass: nil, target_id: nil, target_controller_name: nil)
    @klass = klass
    @target_id = target_id
    @target_controller_name = target_controller_name
  end
end
