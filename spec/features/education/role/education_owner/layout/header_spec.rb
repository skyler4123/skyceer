require 'rails_helper'

RSpec.feature "Home", type: :feature, js: true do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_owner) }

    before do
      sign_in(user: user)
    end

    it "have School text in page" do
      visit root_path
      expect(page).to have_content("Home")
      expect(page).to have_content("My Education")
      expect(page).to have_selector("[data-controller='logo']")
      expect(page).to have_selector("[data-controller='darkmode']")
      expect(page).to have_selector("[role='profile']")
    end
  end
end
