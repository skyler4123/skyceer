# require 'rails_helper'

# RSpec.feature "education_courses#new", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"

#   context "education_role: :education_owner" do
#     let(:new_course_params) {{
#       name: Faker::Name.name,
#       description: Faker::Lorem.sentence,
#     }}
#     let(:course_record) { EducationCourse.find_by(name: new_course_params[:name]) }

#     before do
#       education_category
#       sign_in(user: education_owner.education_ownerable)
#       visit new_education_course_path
#     end

#     it "will not be redirected" do
#       fill_in "education_course[name]", with: new_course_params[:name]
#       fill_in "education_course[description]", with: new_course_params[:description]
#       single_select("education_course[education_school_id]", education_school.name)
#       multi_select("education_course[education_category_id][]", education_category.name)
#       click_button "Save"

#       # Verify the course was created successfully
#       expect(page).to have_current_path(education_courses_path)
#       expect(page).to have_content(CREATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_course_params[:name])
#       expect(course_record).to be_present
#       expect(course_record.education_school).to eq(education_school)
#       expect(course_record.education_categories).to include(education_category)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_owner.education_ownerable.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_owner.education_ownerable)
#       visit new_education_course_path
#       expect(page).to have_routing_error
#     end
#   end
# end
