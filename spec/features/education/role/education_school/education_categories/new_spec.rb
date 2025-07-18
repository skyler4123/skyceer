# require 'rails_helper'

# RSpec.feature "education_categories#new", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_school" do
#     let(:new_category_params) {{
#       name: Faker::Name.name,
#     }}
#     let(:category_record) { EducationCategory.find_by(name: new_category_params[:name]) }

#     before do
#       sign_in(user: education_school.user)
#       visit new_education_category_path
#     end

#     it "will not be redirected" do
#       fill_in "education_category[name]", with: new_category_params[:name]
#       click_button "Save"

#       # Verify the category was created successfully
#       expect(page).to have_current_path(education_categories_path)
#       expect(page).to have_content(CREATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_category_params[:name])
#       expect(category_record).to be_present
#       expect(category_record.user).to eq(education_school.user)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_school.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_school.user)
#       visit new_education_category_path
#       expect(page).to have_routing_error
#     end
#   end
# end
