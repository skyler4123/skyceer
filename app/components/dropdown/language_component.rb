# frozen_string_literal: true

class Dropdown::LanguageComponent < ViewComponent::Base
  renders_one :head
  renders_one :body

  def initialize(
    label: "Language",
    languages: { english: "English", vietnamese: "Viet Nam", spain: "Spain" }
    )
    @label = label
    @languages = languages
  end
end
