require 'rails_helper'

RSpec.feature "education_schools#index", type: :feature, js: true do
  context "education_role: :education_school" do
    let(:user) { create(:user, role: role, education_role: education_role) }
    let(:role) { :normal }
    let(:education_role) { :education_school }
    let!(:education_schools) do
      (1..2).map do |n|
        create(:education_school, user: user, name: "School #{n}")
      end
    end
    context "user as education_user with education_role is not nil" do
      context "user with education_role: :education_school" do
        let(:education_role) { :education_school }

        it "will not be redirected" do
          sign_in(user: user)
          visit education_schools_path
          expect(page).to have_current_path(education_schools_path)
          # check page have content with naes of education_schools
          education_schools.each do |education_school|
            expect(page).to have_content(education_school.name)
          end
        end
      end
    end

    context "user as normal user with education_role is nil" do
      let(:education_role) { nil }

      it "will be redirected" do
        sign_in(user: user)
        visit education_schools_path
        expect(page).to have_routing_error
      end
    end
    

  end
end
