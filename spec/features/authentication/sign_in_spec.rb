require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  context "Sign in with correct data" do
    let(:user) { create(:user, education_role: :education_school) }

    it "signs me in" do
      sign_in(user: user)
      
      expect(page).to have_current_path(user_path(user))
      expect(page).to have_content(SIGN_IN_SUCCESS_MESSAGE)
    end
  end
end
