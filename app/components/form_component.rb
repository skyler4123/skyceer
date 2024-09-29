# frozen_string_literal: true

class FormComponent < ApplicationComponent
  # def call
  #   content_tag :h1, "Hello world!", data: { controller: "form-component" }
  # end
  def initialize(controller: nil, tag: :form, **params)
    super
  end
end
