require 'rails_helper'

RSpec.feature "Home", type: :feature do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_school) }

    it "have School text in page" do
      sign_in(user: user)
      visit root_path
      expect(page).to have_content("Home")
      expect(page).to have_content("My Education")
    end
  end
end
