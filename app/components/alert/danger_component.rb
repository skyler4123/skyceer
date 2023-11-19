# frozen_string_literal: true

class Alert::DangerComponent < ViewComponent::Base
  def initialize(
    label: "Danger alert! Change a few things up and try submitting again.",
    klass: nil,
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
