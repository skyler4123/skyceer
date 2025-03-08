require 'rails_helper'

RSpec.feature "education_rooms#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_room_params) {{
      name: Faker::Name.name,
    }}
    let(:room_record) { EducationRoom.find_by(name: new_room_params[:name]) }

    before do
      education_category
      sign_in(user: education_school.user)
      visit edit_education_room_path(education_room)
    end

    it "will not be redirected" do
      fill_in "education_room[name]", with: new_room_params[:name]
      multi_select("education_room[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the room was created successfully
      expect(room_record).to be_present
      expect(page).to have_current_path(education_rooms_path)
      expect(page).to have_content("Education room was successfully updated.")
      expect(page).to have_content(new_room_params[:name])
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit edit_education_room_path(education_room)
      expect(page).to have_routing_error
    end
  end
end
