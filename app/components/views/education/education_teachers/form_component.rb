# frozen_string_literal: true

class Views::Education::EducationTeacher::FormComponent < ApplicationComponent
  def call
    content_tag :h1, "Hello world!", data: { controller: "views--education--education-teacher--form-component" }
  end
end
