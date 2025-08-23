# require 'rails_helper'

# RSpec.feature "education_schools#index", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"

#   before do
#     education_school.education_admins << education_admin
#   end

#   context "education_role: :education_admin" do
#     it "will not be redirected" do
#       sign_in(user: education_admin.user)
#       visit education_schools_path
#       expect(page).to have_current_path(education_schools_path)
#       expect(page).to have_content(education_school.name)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_admin.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_admin.user)
#       visit education_schools_path
#       expect(page).to have_routing_error
#     end
#   end

# end
