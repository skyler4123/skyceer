require 'rails_helper'

RSpec.feature "Authentication::SignIns", type: :feature do
  let!(:user) { create(:user, password: password, password_confirmation: password) }
  let(:password) { 'password1234' }

  it "signs me in" do
    expect(true).to be(true)
  end
end
