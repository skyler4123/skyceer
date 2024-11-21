require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  let(:user) { create(:user, education_role: :education_school) }

  it "signs me in" do
    # debugger
    visit '/sign_in'
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    submit_button = find('input[type="submit"]')
    # page.driver.debug
    # debugger
    
    submit_button.click
    
    expect(page).to be_subdomain_of("school")
  end
end
