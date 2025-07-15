require 'rails_helper'

RSpec.feature "Home", type: :feature do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_owner) }

    before do
      sign_in(user: user)
    end

    it "have School text in page" do
      visit root_path
      # click on element that have attribute [data-controller='education--logo']
      find("[data-controller='education--logo']").click
      # expect redirect to root_path
      expect(page).to have_current_path(root_path)
      # click on role=product-name
      find("[role='product-name']").click
      # expect redirect to root_path
      expect(page).to have_current_path(root_path)
    end
  end
end
