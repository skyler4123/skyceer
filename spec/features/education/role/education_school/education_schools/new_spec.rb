require 'rails_helper'

RSpec.feature "education_schools#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"

  context "education_role: :education_school" do
    it "will not be redirected" do
      sign_in(user: education_school.user)
      visit new_education_school_path
      expect(page).to have_current_path(new_education_school_path)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit new_education_school_path
      expect(page).to have_routing_error
    end
  end
    
end
