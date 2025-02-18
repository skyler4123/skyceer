require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  include_context "support/shared_contexts/education/role/education_school"

  context "Sign in with correct data" do

    it "signs me in" do
      sign_in(user: user)
      expect(page).to have_current_path(root_path)
      expect(page).to have_content(SIGN_IN_SUCCESS_MESSAGE)
      expect(page).to have_css("img[src='#{user.avatar}']")
    end
  end
end
