require 'rails_helper'

RSpec.feature "education_schools#index", type: :feature, js: true do

  context "role: not education_school" do
    let!(:user) { create(:user) }

    it "will be redirect to root_pathn" do
      sign_in(user: user)
      visit education_schools_path
      expect(page).to have_current_path(root_path)
      expect(page).to have_content(UNAUTHORIZE_MESSAGE)
    end
  end
end
