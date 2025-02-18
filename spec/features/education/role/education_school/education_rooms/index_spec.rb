require 'rails_helper'

RSpec.feature "education_rooms#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/role/education_school"

  context "education_role: :education_school" do
    before do
      education_school.education_rooms << education_room
    end

    it "will not be redirected" do
      sign_in(user: education_school.user)
      visit education_rooms_path
      expect(page).to have_current_path(education_rooms_path, ignore_query: true)
      expect(page).to have_content(education_room.name)
    end
  end

  context "education_role: :not_education_school" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit education_rooms_path
      expect(page).to have_routing_error
    end
  end
end
