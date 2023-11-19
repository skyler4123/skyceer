# frozen_string_literal: true

class Alert::InfoComponent < ViewComponent::Base
  def initialize(
    label: "Info alert! Change a few things up and try submitting again.",
    klass: "flex flex-row justify-between p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
