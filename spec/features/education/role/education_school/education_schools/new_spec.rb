require 'rails_helper'

RSpec.feature "education_schools#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_school_params) {{
      email: Faker::Internet.email,
      name: Faker::Name.name,
    }}
    let(:school_record) { EducationSchool.find_by(email: new_school_params[:email]) }

    before do
      education_category
      sign_in(user: education_school.user)
      visit new_education_school_path
    end

    it "will not be redirected" do
      fill_in "education_school[name]", with: new_school_params[:name]
      fill_in "education_school[email]", with: new_school_params[:email]
      multi_select("education_school[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the school was created successfully
      expect(school_record).to be_present
      expect(school_record.education_categories).to include(education_category)
      expect(page).to have_current_path(education_schools_path)
      expect(page).to have_content("Education school was successfully created.")
      expect(page).to have_content(new_school_params[:name])
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit new_education_school_path
      expect(page).to have_routing_error
    end
  end
end
