require 'rails_helper'

RSpec.feature "education_teachers#edit", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_teacher_params) {{
      email: Faker::Internet.email,
      name: Faker::Name.name,
    }}
    let!(:new_education_school) { create(:education_school, user: education_school.user) }
    let!(:new_education_category) { create(:education_category, education_school: education_school) }
    
    before do
      education_category
      sign_in(user: education_school.user)
      visit edit_education_teacher_path(education_teacher)
    end

    it "will not be redirected" do
      fill_in "education_teacher[name]", with: new_teacher_params[:name]
      fill_in "education_teacher[email]", with: new_teacher_params[:email]
      multi_select("education_teacher[education_school_id][]", new_education_school.name)
      multi_select("education_teacher[education_category_id][]", new_education_category.name)
      click_button "Save"

      expect(page).to have_current_path(education_teachers_path)
      expect(page).to have_content("Education teacher was successfully updated.")
      expect(page).to have_content(new_teacher_params[:name])
      expect(record(education_teacher).name).to eq(new_teacher_params[:name])
      expect(record(education_teacher).email).to eq(new_teacher_params[:email])
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit edit_education_teacher_path(education_teacher)
      expect(page).to have_routing_error
    end
  end
end
