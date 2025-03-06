require 'rails_helper'

RSpec.feature "education_admins#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_admin_params) {{
      email: Faker::Internet.email,
      name: Faker::Name.name,
    }}

    before do
      education_category
      sign_in(user: education_school.user)
      visit new_education_admin_path
    end

    it "will not be redirected" do
      # Fill in the form fields
      fill_in "education_admin[name]", with: new_admin_params[:name]
      fill_in "education_admin[email]", with: new_admin_params[:email]

      # Find and interact with the invisible select element
      school_select = find("select[name='education_admin[education_school_id][]']", visible: false)
      school_select.select education_school.name

      category_select = find("select[name='education_admin[education_category_id][]']", visible: false)
      category_select.select education_category.name

      # Submit the form
      click_button "Create Education admin"

      # Verify the admin was created successfully
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
