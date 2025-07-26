# require 'rails_helper'

# RSpec.feature "education_admins#edit", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_owner" do
#     let(:new_admin_params) {{
#       email: Faker::Internet.email,
#       name: Faker::Name.name,
#     }}
#     let!(:new_education_school) { create(:education_school, user: education_owner.education_ownerable) }
#     let!(:new_education_category) { create(:education_category, user: education_owner.education_ownerable) }
#     let(:admin_record) { EducationAdmin.find_by(email: new_admin_params[:email]) }

#     before do
#       education_category
#       sign_in(user: education_owner.education_ownerable)
#       visit edit_education_admin_path(education_admin)
#     end

#     it "will not be redirected" do
#       fill_in "education_admin[name]", with: new_admin_params[:name]
#       fill_in "education_admin[email]", with: new_admin_params[:email]
#       multi_select("education_admin[education_school_id][]", new_education_school.name)
#       multi_select("education_admin[education_category_id][]", new_education_category.name)
#       click_button "Save"

#       expect(page).to have_current_path(education_admins_path)
#       expect(page).to have_content(UPDATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_admin_params[:name])
#       expect(admin_record).to be_present
#       expect(admin_record.education_schools).to include(new_education_school)
#       expect(admin_record.education_categories).to include(new_education_category)
#       expect(record(education_admin).name).to eq(new_admin_params[:name])
#       expect(record(education_admin).email).to eq(new_admin_params[:email])
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_school.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_owner.education_ownerable)
#       visit edit_education_admin_path(education_admin)
#       expect(page).to have_routing_error
#     end
#   end
# end
