require 'rails_helper'

RSpec.feature "Education Index pages", type: :feature, js: true do
  include Rails.application.routes.url_helpers

  include_context "support/shared_contexts/education/default_database"

  context "when user is set education_role as owner" do
    let(:user) { education_owner.education_ownerable }

    # Define path methods as constants (symbols)
    available_paths = [
      :education_schools_path,
      :education_admins_path,
      :education_teachers_path,
      :education_students_path,
      :education_classes_path,
      :education_scoreboards_path,
      :calendar_events_path,
      :education_rooms_path,
      :education_courses_path,
      :education_categories_path,
      :education_subjects_path,
      :education_exams_path,
      :payment_orders_path
    ]

    before do
      calendar_event
      payment_order
      sign_in(user: user)
    end

    # Test each path individually
    available_paths.each do |path_method|
      it "renders #{path_method} successfully" do
        path = send(path_method)
        visit path
        expect(page).to have_http_status(:success)
        expect(page).to have_selector("[data-controller='education--education-owner--aside']")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: 'School')
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Admin")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Teachers")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Students")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Classes")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Score Boards")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Schedules")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Rooms")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Courses")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Categories")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Subjects")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Exams")
        expect(page).to have_selector("[data-controller='education--education-owner--aside'] a", text: "Payments")
      end
    end
  end
end
