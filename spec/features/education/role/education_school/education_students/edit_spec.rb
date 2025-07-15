# require 'rails_helper'

# RSpec.feature "education_students#edit", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_owner" do
#     let(:new_student_params) {{
#       email: Faker::Internet.email,
#       name: Faker::Name.name,
#     }}
#     let!(:new_education_school) { create(:education_school, user: education_school.user) }
#     let!(:new_education_category) { create(:education_category, user: education_school.user) }
    
#     before do
#       education_category
#       education_class
#       sign_in(user: education_school.user)
#       visit edit_education_student_path(education_student)
#     end

#     it "will not be redirected" do
#       fill_in "education_student[name]", with: new_student_params[:name]
#       fill_in "education_student[email]", with: new_student_params[:email]
#       multi_select("education_student[education_school_id][]", new_education_school.name)
#       multi_select("education_student[education_category_id][]", new_education_category.name)
#       multi_select("education_student[education_class_id][]", education_class.name)
#       click_button "Save"

#       expect(page).to have_current_path(education_students_path)
#       expect(page).to have_content(UPDATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_student_params[:name])
#       expect(record(education_student)).to be_present
#       expect(record(education_student).education_schools).to include(new_education_school)
#       expect(record(education_student).education_categories).to include(new_education_category)
#       expect(record(education_student).name).to eq(new_student_params[:name])
#       expect(record(education_student).email).to eq(new_student_params[:email])
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_school.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_school.user)
#       visit edit_education_student_path(education_student)
#       expect(page).to have_routing_error
#     end
#   end
# end
