# frozen_string_literal: true

class Alert::DarkComponent < ViewComponent::Base
  def initialize(
    label: "Dark alert! Change a few things up and try submitting again.",
    klass: "flex flex-row justify-between p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
