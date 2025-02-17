require 'rails_helper'

RSpec.feature "education_subjects#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/role/education_school"

  context "education_role: :education_school" do
    let(:education_role) { :education_school }

    it "will not be redirected" do
      sign_in(user: education_school.user)
      visit education_subjects_path
      expect(page).to have_current_path(education_subjects_path, ignore_query: true)
      expect(page).to have_content(education_subject.name)
    end
  end

  context "education_role: :not_education_school" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit education_subjects_path
      expect(page).to have_routing_error
    end
  end
end
