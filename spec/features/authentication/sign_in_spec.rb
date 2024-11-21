require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  let(:user) { create(:user, education_role: :school) }
  # before do
  #   Capybara.default_driver = :selenium_chrome_headless
  #   Capybara.use_default_driver
  # end

  it "signs me in" do
    visit '/sign_in'
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    fill_in 'password_confirmation', with: user.password_confirmation
    submit_button = find('input[type="submit"]')
    submit_button.click
    page.driver.debug
    expect(page).to have_content('Skip initial efforts')
  end
end
