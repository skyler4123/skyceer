# frozen_string_literal: true

class Alert::WarningComponent < ViewComponent::Base
  def initialize(
    label: "Warning alert! Change a few things up and try submitting again.",
    klass: "flex flex-row justify-between p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
