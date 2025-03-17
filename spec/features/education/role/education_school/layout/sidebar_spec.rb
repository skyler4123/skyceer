require 'rails_helper'

RSpec.feature "Home", type: :feature do
  # include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as school" do
    let(:user) { create(:user, education_role: :education_school) }
    let(:available_paths) {[
      education_schools_path,
      education_admins_path,
      education_teachers_path,
      education_students_path,
      education_classes_path,
      education_scoreboards_path,
      calendar_events_path,
      education_rooms_path,
      education_courses_path,
      education_categories_path,
      education_subjects_path,
      education_exams_path,
      payment_orders_path
    ]}

    before do
      sign_in(user: user)
      visit available_paths.sample
    end

    it "have sidebar" do
      expect(page).to have_selector("[data-controller='education--education-school--aside']")
    end

    it "have School tab" do
      find("[data-controller='education--education-school--aside'] a", text: "School").click
      expect(page).to have_current_path(education_schools_path)
    end

    it "have Admin tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Admin").click
      expect(page).to have_current_path(education_admins_path)
    end

    it "have Teachers tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Teachers").click
      expect(page).to have_current_path(education_teachers_path)
    end

    it "have Students tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Students").click
      expect(page).to have_current_path(education_students_path)
    end

    it "have Classes tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Classes").click
      expect(page).to have_current_path(education_classes_path)
    end

    it "have Score Boards tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Score Boards").click
      expect(page).to have_current_path(education_scoreboards_path)
    end

    it "have Schedules tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Schedules").click
      expect(page).to have_current_path(calendar_events_path)
    end

    it "have Rooms tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Rooms").click
      expect(page).to have_current_path(education_rooms_path)
    end

    it "have Courses tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Courses").click
      expect(page).to have_current_path(education_courses_path)
    end

    it "have Categories tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Categories").click
      expect(page).to have_current_path(education_categories_path)
    end

    it "have Subjects tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Subjects").click
      expect(page).to have_current_path(education_subjects_path)
    end

    it "have Exams tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Exams").click
      expect(page).to have_current_path(education_exams_path)
    end

    it "have Payments tab" do
      find("[data-controller='education--education-school--aside'] a", text: "Payments").click
      expect(page).to have_current_path(payment_orders_path)
    end
  end
end
