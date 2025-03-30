require 'rails_helper'

RSpec.feature "education_classes#edit", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_class_params) {{
      name: Faker::Name.name,
    }}
    let(:class_record) { EducationClass.find_by(name: new_class_params[:name]) }
    let!(:new_education_school) { create(:education_school, user: education_school.user) }
    let!(:new_education_course) { create(:education_course, education_school: education_school) }

    before do
      education_category
      education_school.education_teachers << education_teacher
      education_school.education_subjects << education_subject
      education_teacher.education_subjects << education_subject
      sign_in(user: education_school.user)
      visit edit_education_class_path(education_class)
    end

    it "will not be redirected" do
      fill_in "education_class[name]", with: new_class_params[:name]
      single_select("education_class[education_school_id]", new_education_school.name)
      single_select("education_class[education_course_id]", new_education_course.name)
      multi_select("education_class[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the class was created successfully
      expect(page).to have_current_path(edit_education_class_path(education_class))
      expect(page).to have_content(UPDATED_SUCCESS_MESSAGE)
      expect(page).to have_field("education_class[name]", with: new_class_params[:name])
      expect(class_record).to be_present
      expect(class_record.education_school).to eq(new_education_school)
      expect(class_record.education_course).to eq(new_education_course)
      expect(class_record.education_categories).to include(education_category)
    end

    it "work for subject appointment" do
      click_button "Appoint new subject"
      single_select("education_subject_appointment[education_subject_id]", education_subject.name)
      single_select("education_subject_appointment[appoint_from_id]", education_teacher.name)
      click_button "Save", id: "education_subject_appointment_education_class_id"

      expect(page).to have_current_path(edit_education_class_path(education_class))
      expect(page).to have_content(UPDATED_SUCCESS_MESSAGE)
      expect(page).to have_content(education_subject.name)
      expect(page).to have_content(education_teacher.name)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit edit_education_class_path(education_class)
      expect(page).to have_routing_error
    end
  end
end
