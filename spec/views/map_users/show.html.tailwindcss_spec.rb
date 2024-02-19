require 'rails_helper'

RSpec.describe "map_users/show", type: :view do
  before(:each) do
    assign(:map_user, MapUser.create!(
      user: nil,
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Name/)
  end
end
