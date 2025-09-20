require 'rails_helper'

RSpec.feature "Darkmode", type: :feature, js: true do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_owner) }

    before do
      sign_in(user: user)
    end

    it "have School text in page" do
      visit root_path
      # click on element that have attribute [data-controller='darkmode']
      find("[data-controller='darkmode']").click
      # expect html tag have class dark
      expect(page).to have_css("html.dark")
      # click on element that have attribute [data-controller='darkmode']
      find("[data-controller='darkmode']").click
      # expect html tag not have class dark
      expect(page).not_to have_css("html.dark")
    end
  end
end
