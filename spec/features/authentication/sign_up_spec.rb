require 'rails_helper'

RSpec.feature "Authentication::SignUps", type: :feature, js: true do
  let(:new_user_params) { {
    email: 'user@example.com',
    password: 'password1234',
    password_confirmation: 'password1234',
  } }
  let(:created_user) { User.find_by(email: new_user_params[:email]) }

  it "signs me in" do
    sign_up(params: new_user_params)
    expect(page).to have_current_path(root_path)
    expect(created_user).to be_truthy
  end
end
