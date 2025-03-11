require 'rails_helper'

RSpec.feature "education_subjects#new", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"
  
  context "education_role: :education_school" do
    let(:new_subject_params) {{
      name: Faker::Name.name,
      description: Faker::Lorem.sentence,
    }}
    let(:subject_record) { EducationSubject.find_by(name: new_subject_params[:name]) }

    before do
      education_category
      sign_in(user: education_school.user)
      visit new_education_subject_path
    end

    it "will not be redirected" do
      fill_in "education_subject[name]", with: new_subject_params[:name]
      fill_in "education_subject[description]", with: new_subject_params[:description]
      single_select("education_subject[education_school_id]", education_school.name)
      multi_select("education_subject[education_category_id][]", education_category.name)
      click_button "Save"

      # Verify the subject was created successfully
      expect(page).to have_current_path(education_subjects_path)
      expect(page).to have_content("Education subject was successfully created.")
      expect(page).to have_content(new_subject_params[:name])
      expect(subject_record).to be_present
      expect(subject_record.education_school).to eq(education_school)
      expect(subject_record.education_categories).to include(education_category)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit new_education_subject_path
      expect(page).to have_routing_error
    end
  end
end
