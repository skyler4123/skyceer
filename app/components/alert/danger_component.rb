# frozen_string_literal: true

class Alert::DangerComponent < ViewComponent::Base
  def initialize(
    label: "Danger alert! Change a few things up and try submitting again.",
    klass: "flex flex-row justify-between p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
