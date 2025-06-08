# require 'rails_helper'

# RSpec.feature "education_teachers#new", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_school" do
#     let(:new_teacher_params) {{
#       email: Faker::Internet.email,
#       name: Faker::Name.name,
#     }}
#     let(:teacher_record) { EducationTeacher.find_by(email: new_teacher_params[:email]) }

#     before do
#       education_category
#       sign_in(user: education_school.user)
#       visit new_education_teacher_path
#     end

#     it "will not be redirected" do
#       fill_in "education_teacher[name]", with: new_teacher_params[:name]
#       fill_in "education_teacher[email]", with: new_teacher_params[:email]
#       multi_select("education_teacher[education_school_id][]", education_school.name)
#       multi_select("education_teacher[education_category_id][]", education_category.name)
#       click_button "Save"

#       # Verify the teacher was created successfully
#       expect(page).to have_current_path(education_teachers_path)
#       expect(page).to have_content(CREATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_teacher_params[:name])
#       expect(teacher_record).to be_present
#       expect(teacher_record.education_schools).to include(education_school)
#       expect(teacher_record.education_categories).to include(education_category)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_school.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_school.user)
#       visit new_education_teacher_path
#       expect(page).to have_routing_error
#     end
#   end
# end
