require 'rails_helper'

RSpec.describe "map_locations/show", type: :view do
  before(:each) do
    assign(:map_location, MapLocation.create!(
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
