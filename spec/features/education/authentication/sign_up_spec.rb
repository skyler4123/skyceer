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
    expect(created_user).to be_truthy
    expect(page).to have_current_path(user_path(created_user))
    expect(page).to have_content(created_user.name)
  end
end
