require 'rails_helper'

RSpec.feature "education_teachers#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"

  context "education_role: :education_teacher" do
    before do
      education_school.education_teachers << education_teacher
    end
    
    it "will not be redirected" do
      sign_in(user: education_teacher.user)
      visit education_teachers_path
      expect(page).to have_current_path(education_teachers_path, ignore_query: true)
      expect(page).to have_content(education_teacher.name)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_teacher.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_teacher.user)
      visit education_teachers_path
      expect(page).to have_routing_error
    end
  end
end
