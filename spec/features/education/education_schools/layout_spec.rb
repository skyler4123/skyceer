require 'rails_helper'

RSpec.feature "education_schools#layout", type: :feature, js: true do
  context "role: admin" do
    let!(:user) { create(:user, role: :admin) }

    it "have name content" do
      sign_in(user: user)
      visit education_schools_path
      page.find('[data-controller="education--user-profile-dropdown"]').click
      expect(page).to have_content(user.name)
    end
  end
end
