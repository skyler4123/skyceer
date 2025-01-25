require 'rails_helper'

RSpec.feature "education_schools#layout", type: :feature, js: true do
  context "role: admin" do
    let!(:user) { create(:user, role: :normal, education_role: :education_school) }

    it "have name content" do
      sign_in(user: user)
      visit root_path
      page.find('[data-controller="education--user-profile-dropdown"]').click
      expect(page).to have_content(user.name)
    end
  end
end
