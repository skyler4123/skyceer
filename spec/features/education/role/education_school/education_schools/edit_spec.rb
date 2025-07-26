# require 'rails_helper'

# RSpec.feature "education_schools#edit", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_owner" do
#     let(:new_school_params) {{
#       email: Faker::Internet.email,
#       name: Faker::Name.name,
#       # name: "New School Name",
#     }}
#     let!(:new_education_school) { create(:education_school, user: education_owner.education_ownerable) }
    
#     before do
#       education_category
#       sign_in(user: education_owner.education_ownerable)
#       visit edit_education_school_path(education_school)
#     end

#     it "will not be redirected" do
#       fill_in "education_school[name]", with: new_school_params[:name]
#       fill_in "education_school[email]", with: new_school_params[:email]
#       multi_select("education_school[education_category_id][]", education_category.name)
#       click_button "Save"

#       expect(page).to have_current_path(education_schools_path)
#       expect(page).to have_content(UPDATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_school_params[:name])
#       expect(record(education_school)).to be_present
#       expect(record(education_school).education_categories).to include(education_category)
#       expect(record(education_school).name).to eq(new_school_params[:name])
#       expect(record(education_school).email).to eq(new_school_params[:email])
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_owner.education_ownerable.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_owner.education_ownerable)
#       visit edit_education_school_path(education_school)
#       expect(page).to have_routing_error
#     end
#   end
# end
