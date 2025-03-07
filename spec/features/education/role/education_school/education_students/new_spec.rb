require 'rails_helper'

RSpec.feature "education_students#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_student_params) {{
      email: Faker::Internet.email,
      name: Faker::Name.name,
    }}
    let(:student_record) { EducationStudent.find_by(email: new_student_params[:email]) }

    before do
      education_school.education_categories << education_category
      sign_in(user: education_school.user)
      visit new_education_student_path
    end

    it "will not be redirected" do
      fill_in "education_student[name]", with: new_student_params[:name]
      fill_in "education_student[email]", with: new_student_params[:email]
      multi_select("education_student[education_school_id][]", education_school.name)
      multi_select("education_student[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the student was created successfully
      expect(student_record).to be_present
      expect(page).to have_current_path(education_students_path)
      expect(page).to have_content("Education student was successfully created.")
      expect(page).to have_content(new_student_params[:name])
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit new_education_student_path
      expect(page).to have_routing_error
    end
  end
end
