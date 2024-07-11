require 'rails_helper'

RSpec.feature "Authentication::SignUps", type: :feature, js: true do
  before :each do
    # User.create(email: 'user@example.com', password: 'password')
    Capybara.default_driver = :selenium_chrome
    Capybara.use_default_driver
    # default_url_options[:host] = 'localhost:3000'
    Capybara.app_host = "http://" + 'localhost'
    Capybara.server_port = '1234'
  end

  it "signs me in" do
    # debugger
    visit '/sign_up'
    # within("#session") do
    #   fill_in 'Email', with: 'user@example.com'
    #   fill_in 'Password', with: 'password'
    # end
    # click_button 'Sign in'
    expect(true).to be(true)
    sleep 15

  end
end
