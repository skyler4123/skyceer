require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  let(:user) { create(:user, education_role: :education_school) }

  it "signs me in" do
    sign_in(user: user)
    
    expect(page).to have_current_path(root_path)
  end
end
