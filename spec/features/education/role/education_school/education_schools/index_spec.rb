require 'rails_helper'

RSpec.feature "education_schools#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/role/education_school"

  context "education_role: :education_school" do
    let(:education_role) { :education_school }

    it "will not be redirected" do
      sign_in(user: education_school_user)
      visit education_schools_path
      expect(page).to have_current_path(education_schools_path)
      expect(page).to have_content(education_school.name)
    end
  end

  context "education_role: :not_education_school" do
    let(:education_role) { nil }

    it "will be redirected" do
      sign_in(user: education_school_user)
      visit education_schools_path
      expect(page).to have_routing_error
    end
  end
    
end
