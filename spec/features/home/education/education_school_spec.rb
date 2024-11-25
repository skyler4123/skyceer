require 'rails_helper'

RSpec.feature "education_schools#index", type: :feature, js: true do
  context "role: not admin" do
    let!(:user) { create(:user, education_role: :education_school) }

    it "will be redirect to root_pathn" do
      sign_in(user: user)
      click_link('Education')
      expect(page).to have_current_path(url_for(user))
    end
  end
end
