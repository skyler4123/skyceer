require 'rails_helper'

RSpec.describe "map_points/show", type: :view do
  before(:each) do
    assign(:map_point, MapPoint.create!(
      coordinates: "9.99",
      mapable: nil,
      map_user: nil,
      verified: false,
      expired: false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/false/)
  end
end
