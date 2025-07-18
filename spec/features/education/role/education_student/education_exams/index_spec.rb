# require 'rails_helper'

# RSpec.feature "education_exams#index", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"

#   context "education_role: :education_student" do
#     before do
#       education_school.education_students << education_student
#       education_class.education_students << education_student
#       education_exam_to_student
#     end

#     it "will not be redirected" do
#       sign_in(user: education_student.user)
#       visit education_exams_path
#       expect(page).to have_current_path(education_exams_path, ignore_query: true)
#       expect(page).to have_content(education_exam.name)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_student.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_student.user)
#       visit education_exams_path
#       expect(page).to have_routing_error
#     end
#   end
# end
