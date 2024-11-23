module SessionHelper
  def sign_in(user:)
    visit sign_in_path
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    submit_button = find('input[type="submit"]')
    submit_button.click
  end

  def sign_up(params:)
    visit sign_up_path
    fill_in 'email', with: params[:email]
    fill_in 'password', with: params[:password]
    fill_in 'password_confirmation', with: params[:password_confirmation]
    submit_button = find('input[type="submit"]')
    submit_button.click
  end
end

RSpec.configure do |config|
  config.include SessionHelper
end