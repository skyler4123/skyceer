require 'rails_helper'

RSpec.feature "Home", type: :feature do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is not set education_role yet" do
    let(:user) { create(:user, education_role: nil) }

    it "have Set Role text in page" do
      sign_in(user: user)
      visit root_path
      expect(page).to have_content("Create School")
      expect(page).to have_content("Create Admin")
      expect(page).to have_content("Create Teacher")
      expect(page).to have_content("Create Student")
    end
  end

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_school) }

    it "have School text in page" do
      sign_in(user: user)
      visit root_path
      expect(page).to have_content("My Education")
    end
  end
end
