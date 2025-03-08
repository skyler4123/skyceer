require 'rails_helper'

RSpec.feature "education_classes#edit", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_class_params) {{
      name: Faker::Name.name,
    }}
    let(:class_record) { EducationClass.find_by(name: new_class_params[:name]) }

    before do
      education_category
      education_course
      sign_in(user: education_school.user)
      visit edit_education_class_path(education_class)
    end

    it "will not be redirected" do
      fill_in "education_class[name]", with: new_class_params[:name]
      multi_select("education_class[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the class was created successfully
      expect(class_record).to be_present
      expect(page).to have_current_path(education_classes_path)
      expect(page).to have_content("Education class was successfully updated.")
      expect(page).to have_content(new_class_params[:name])
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit edit_education_class_path(education_class)
      expect(page).to have_routing_error
    end
  end
end
