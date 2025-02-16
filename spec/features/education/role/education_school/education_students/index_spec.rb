require 'rails_helper'

RSpec.feature "education_students#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/role/education_school"

  context "education_role: :education_school" do
    let(:education_role) { :education_school }

    it "will not be redirected" do
      sign_in(user: education_school_user)
      visit education_students_path
      # click on select with id education_class_id
      select education_class.name, from: "education_class_id"
      # click on button with id submit
      find("input[type='submit']").click
      # expect to be redirected to education_students_path and dont care about the query string
      expect(page).to have_current_path(education_students_path, ignore_query: true)
      expect(page).to have_content(education_student.name)
    end
  end

  context "education_role: :not_education_school" do
    let(:education_role) { nil }

    it "will be redirected" do
      sign_in(user: education_school_user)
      visit education_students_path
      expect(page).to have_routing_error
    end
  end
end
