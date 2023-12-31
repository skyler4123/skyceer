# frozen_string_literal: true

class SwitchComponent < ViewComponent::Base
  renders_many :switches
  
  def initialize(klass: nil, default_klass: nil, switch_class: nil, default_switch_class: nil)
    @klass = klass
    @default_klass = default_klass
    @switch_class = switch_class
    @default_switch_class = default_switch_class
  end
end
