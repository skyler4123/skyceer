require 'rails_helper'

RSpec.feature "Home", type: :feature do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_owner) }

    before do
      sign_in(user: user)
    end

    it "have School text in page" do
      visit root_path
      # expect(page).to have_selector("[data-controller='darkmode']")
      # click on element that have attribute [role='profile']
      find("[role='profile']").click
      # expect see user.name
      expect(page).to have_content(user.name)
      # expect see Sign out
      expect(page).to have_content("Sign Out")
    end
  end
end
