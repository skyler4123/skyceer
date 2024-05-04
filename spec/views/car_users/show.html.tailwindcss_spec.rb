require 'rails_helper'

RSpec.describe "car_users/show", type: :view do
  before(:each) do
    assign(:car_user, CarUser.create!(
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
