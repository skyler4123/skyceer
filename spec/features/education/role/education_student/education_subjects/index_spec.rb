# require 'rails_helper'

# RSpec.feature "education_subjects#index", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"

#   context "education_role: :education_school" do
#     before do
#       education_school.education_students << education_student
#       education_class.education_students << education_student
#       education_class.education_subjects << education_subject
#     end

#     it "will not be redirected" do
#       sign_in(user: education_student.user)
#       visit education_subjects_path
#       expect(page).to have_current_path(education_subjects_path, ignore_query: true)
#       expect(page).to have_content(education_subject.name)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_student.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_student.user)
#       visit education_subjects_path
#       expect(page).to have_routing_error
#     end
#   end
# end
