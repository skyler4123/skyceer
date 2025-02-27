require 'rails_helper'

RSpec.feature "Authentication::SignUps", type: :feature, js: true do
  let(:new_user_params) {
    {
      email: 'user@example.com',
      password: 'password1234',
      password_confirmation: 'password1234',
      name: 'User',
      education_role: User::EDUCATION_ROLE_DESCRIPTIONS.values.sample
    } 
  }
  let(:created_user) { User.find_by(email: new_user_params[:email]) }

  context "Sign up with normal user" do
    it "signs me in" do
      sign_up(params: new_user_params)
      expect(created_user).to be_truthy
      expect(page).to have_content(SIGN_UP_SUCCESS_MESSAGE)
    end
  end
end
