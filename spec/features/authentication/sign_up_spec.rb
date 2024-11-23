require 'rails_helper'

RSpec.feature "Authentication::SignUps", type: :feature, js: true do
  let(:new_user_params) { {
    email: 'user@example.com',
    password: 'password1234',
    password_confirmation: 'password1234',
  } }
  let(:created_user) { User.find_by(email: new_user_params[:email]) }

  it "signs me in" do
    visit '/sign_up'
    fill_in 'email', with: new_user_params[:email]
    fill_in 'password', with: new_user_params[:password]
    fill_in 'password_confirmation', with: new_user_params[:password_confirmation]
    submit_button = find('input[type="submit"]')
    submit_button.click
    # page.driver.debug
    expect(page).to have_current_path(root_path)
    expect(created_user).to be_truthy
  end
end
