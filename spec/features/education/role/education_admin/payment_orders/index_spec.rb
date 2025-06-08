# require 'rails_helper'

# RSpec.feature "payment_orders#index", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"

#   context "education_role: :education_admin" do

#     before do
#       education_school.education_admins << education_admin
#       payment_order
#     end

#     it "will not be redirected" do
#       sign_in(user: education_admin.user)
#       visit payment_orders_path
#       expect(page).to have_current_path(payment_orders_path, ignore_query: true)
#       expect(page).to have_content(education_student.name)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_admin.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_admin.user)
#       visit payment_orders_path
#       expect(page).to have_routing_error
#     end
#   end
# end
