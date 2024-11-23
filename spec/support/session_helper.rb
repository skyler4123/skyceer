module SessionHelper
  def login(user)
    visit sign_in_path
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    submit_button = find('input[type="submit"]')
    submit_button.click
  end
end

RSpec.configure do |config|
  config.include SessionHelper
end