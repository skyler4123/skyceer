# frozen_string_literal: true

class Alert::WarningComponent < ViewComponent::Base
  def initialize(
    label: "Warning alert! Change a few things up and try submitting again.",
    klass: nil,
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
