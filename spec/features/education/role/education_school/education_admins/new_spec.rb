# require 'rails_helper'

# RSpec.feature "education_admins#new", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_school" do
#     let(:new_admin_params) {{
#       email: Faker::Internet.email,
#       name: Faker::Name.name,
#     }}
#     let(:admin_record) { EducationAdmin.find_by(email: new_admin_params[:email]) }

#     before do
#       education_category
#       sign_in(user: education_school.user)
#       visit new_education_admin_path
#     end

#     it "will not be redirected" do
#       fill_in "education_admin[name]", with: new_admin_params[:name]
#       fill_in "education_admin[email]", with: new_admin_params[:email]
#       multi_select("education_admin[education_school_id][]", education_school.name)
#       multi_select("education_admin[education_category_id][]", education_category.name)
#       click_button "Save"

#       # Verify the admin was created successfully
#       expect(page).to have_current_path(education_admins_path)
#       expect(page).to have_content(CREATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_admin_params[:name])
#       expect(admin_record).to be_present
#       expect(admin_record.education_schools).to include(education_school)
#       expect(admin_record.education_categories).to include(education_category)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_school.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_school.user)
#       visit new_education_admin_path
#       expect(page).to have_routing_error
#     end
#   end
# end
