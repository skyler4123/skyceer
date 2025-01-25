require 'rails_helper'

RSpec.feature "education_schools#index", type: :feature, js: true do
  context "education_role: :education_school" do
    let!(:user) { create(:user, :education_school) }

    it "will not be redirected" do
      sign_in(user: user)
      visit education_schools_path
      expect(page).to have_current_path(education_schools_path)
    end
  end
end
