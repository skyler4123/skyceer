require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  # include_context "support/shared_contexts/education/default_database"
  let(:user) { create(:user) }
  context "Sign in with correct data" do
    it "signs me in" do
      sign_in(user: user)
      expect(page).to have_current_path(root_path)
      # expect(page).to have_content(SIGN_IN_SUCCESS_MESSAGE)
      expect(page).to have_css("img[src='#{user.avatar}']")
    end
  end

  context "when user is not sign in yet" do
    it "have Sign In text in page" do
      visit root_path
      expect(page).to have_css("header", text: "Sign In")
    end
  end
end
