require 'rails_helper'

RSpec.feature "Authentication::SignUps", type: :feature, js: true do

  before do
    Capybara.default_driver = :selenium_chrome_headless
    Capybara.use_default_driver
  end

  it "signs me in" do
    visit '/sign_up'
    # within("#session") do
    fill_in 'email', with: 'user@example.com'
    fill_in 'password', with: 'password1234'
    fill_in 'password_confirmation', with: 'password1234'
    submit_button = find('input[type="submit"]')
    submit_button.click
    expect(page).to have_content('Skip initial efforts')
  end
end
