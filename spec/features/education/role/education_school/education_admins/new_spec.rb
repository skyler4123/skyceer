require 'rails_helper'

RSpec.feature "education_admins#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_admin_params) {{
      email: Faker::Internet.email,
      name: Faker::Name.name,
    }}
    let(:admin_record) { EducationAdmin.find_by(email: new_admin_params[:email]) }

    before do
      education_school.education_categories << education_category
      sign_in(user: education_school.user)
      visit new_education_admin_path
    end

    it "will not be redirected" do
      fill_in "education_admin[name]", with: new_admin_params[:name]
      fill_in "education_admin[email]", with: new_admin_params[:email]
      multi_select("education_admin[education_school_id][]", education_school.name)
      multi_select("education_admin[education_category_id][]", education_category.name)
      click_button "Create Education admin"

      # Verify the admin was created successfully
      expect(admin_record).to be_present
      expect(page).to have_current_path(education_admins_path)
      expect(page).to have_content("Education admin was successfully created.")
      expect(page).to have_content(new_admin_params[:name])
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit new_education_admin_path
      expect(page).to have_routing_error
    end
  end
end
