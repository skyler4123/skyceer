# require 'rails_helper'

# RSpec.feature "education_rooms#new", type: :feature, js: true do
#   include_context "support/shared_contexts/education/default_database"
  
#   context "education_role: :education_owner" do
#     let(:new_room_params) {{
#       name: Faker::Name.name,
#     }}
#     let(:room_record) { EducationRoom.find_by(name: new_room_params[:name]) }

#     before do
#       education_category
#       sign_in(user: education_owner.education_ownerable)
#       visit new_education_room_path
#     end

#     it "will not be redirected" do
#       fill_in "education_room[name]", with: new_room_params[:name]
#       single_select("education_room[education_school_id]", education_school.name)
#       multi_select("education_room[education_category_id][]", education_category.name)
#       click_button "Save"

#       # Verify the room was created successfully
#       expect(page).to have_current_path(education_rooms_path)
#       expect(page).to have_content(CREATED_SUCCESS_MESSAGE)
#       expect(page).to have_content(new_room_params[:name])
#       expect(room_record).to be_present
#       expect(room_record.education_school).to eq(education_school)
#       expect(room_record.education_categories).to include(education_category)
#     end
#   end

#   context "education_role: :not_education_user" do
#     before do
#       education_school.user.update(education_role: nil)
#     end

#     it "will be redirected" do
#       sign_in(user: education_owner.education_ownerable)
#       visit new_education_room_path
#       expect(page).to have_routing_error
#     end
#   end
# end
