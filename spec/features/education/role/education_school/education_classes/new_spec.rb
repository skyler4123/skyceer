require 'rails_helper'

RSpec.feature "education_classes#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_class_params) {{
      name: Faker::Name.name,
    }}
    let(:class_record) { EducationClass.find_by(name: new_class_params[:name]) }

    before do
      education_category
      education_course
      sign_in(user: education_school.user)
      visit new_education_class_path
    end

    it "will not be redirected" do
      fill_in "education_class[name]", with: new_class_params[:name]
      single_select("education_class[education_school_id]", education_school.name)
      single_select("education_class[education_course_id]", education_course.name)
      multi_select("education_class[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the class was created successfully
      expect(page).to have_current_path(edit_education_class_path(class_record))
      expect(page).to have_content(CREATED_SUCCESS_MESSAGE)
      expect(page).to have_field("education_class[name]", with: new_class_params[:name])
      expect(class_record).to be_present
      expect(class_record.education_school).to eq(education_school)
      expect(class_record.education_course).to eq(education_course)
      expect(class_record.education_categories).to include(education_category)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit new_education_class_path
      expect(page).to have_routing_error
    end
  end
end
