require 'rails_helper'

RSpec.feature "education_schools#index", type: :feature, js: true do
  context "role: admin" do
    let!(:user) { create(:user, role: :admin) }

    it "will not be redirected" do
      sign_in(user: user)
      visit education_schools_path
      expect(page).to have_current_path(education_schools_path)
    end
  end

  context "role: not admin" do
    let!(:user) { create(:user, role: :normal) }

    it "will be redirect to root_pathn" do
      sign_in(user: user)
      visit education_schools_path
      expect(page).to have_content(Pundit::NotAuthorizedError)
    end
  end
end
