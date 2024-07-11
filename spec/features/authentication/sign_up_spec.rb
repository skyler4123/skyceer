require 'rails_helper'

RSpec.feature "Authentication::SignUps", type: :feature, js: true do

  it "signs me in" do
    visit '/sign_up'
    # within("#session") do
    fill_in 'email', with: 'user@example.com'
    fill_in 'password', with: 'password'
    fill_in 'password_confirmation', with: 'password'
    # click_on "Sign Up"

    # end
    # click_button 'Sign in'
    # expect(true).to be(true)
    sleep 60

  end
end
