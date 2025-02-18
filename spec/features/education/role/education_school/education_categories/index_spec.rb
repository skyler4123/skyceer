require 'rails_helper'

RSpec.feature "education_categories#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"

  context "education_role: :education_school" do
    before do
      education_school.education_categories << education_category
    end

    it "will not be redirected" do
      sign_in(user: education_school.user)
      visit education_categories_path
      expect(page).to have_current_path(education_categories_path, ignore_query: true)
      expect(page).to have_content(education_category.name)
    end
  end

  context "education_role: :not_education_school" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit education_categories_path
      expect(page).to have_routing_error
    end
  end
end
