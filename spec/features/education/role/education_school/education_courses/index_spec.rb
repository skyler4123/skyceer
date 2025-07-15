require 'rails_helper'

RSpec.feature "education_courses#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"

  before do
    education_school.education_courses << education_course
  end

  context "education_role: :education_owner" do
    it "will not be redirected" do
      sign_in(user: education_school.user)
      visit education_courses_path
      expect(page).to have_current_path(education_courses_path, ignore_query: true)
      expect(page).to have_content(education_course.name)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit education_courses_path
      expect(page).to have_routing_error
    end
  end
end
