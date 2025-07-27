require 'rails_helper'

RSpec.feature "Application::Gems::MissionControl", type: :feature do
  context "Sign in with correct data" do
    let(:role) { :normal }
    let(:education_role) { :education_owner }
    let!(:user) { create(:user, role: role, education_role: education_role) }
    let(:mission_control_url) { '/jobs' }

    context "when user is normal" do
      let(:role) { :normal }

      it "signs me in" do
        sign_in(user: user)
        visit mission_control_url
        expect(page).to have_current_path(root_path)
        expect(page).to have_content(MISSION_CONTROL_FAILED_MESSAGE)
      end
    end

    context "when user is admin" do
      let(:role) { :admin }

      it "signs me in" do
        sign_in(user: user)
        visit mission_control_url
        expect(page).to have_current_path(mission_control_url)
        expect(page).to have_content("Scheduled jobs")
      end
    end
  end
end
