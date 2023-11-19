# frozen_string_literal: true

class Alert::SuccessComponent < ViewComponent::Base
  def initialize(
    label: "Success alert! Change a few things up and try submitting again.",
    klass: "flex flex-row justify-between p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
    closable: true
    )
    @label = label
    @klass = klass
    @closable = closable
  end

end
