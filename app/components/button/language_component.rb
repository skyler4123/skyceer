# frozen_string_literal: true

class Button::LanguageComponent < ViewComponent::Base
  def initialize(dropdown_options: {}, list_options: {}, li_class: "cursor-pointer hover:bg-gray-200", **language)
    @dropdown_options = dropdown_options
    @list_options = list_options
    @li_class = li_class
    @language = language
  end
end
