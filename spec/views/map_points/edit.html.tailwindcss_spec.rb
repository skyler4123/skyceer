require 'rails_helper'

RSpec.describe "map_points/edit", type: :view do
  let(:map_point) {
    MapPoint.create!(
      coordinates: "9.99",
      mapable: nil,
      map_user: nil,
      verified: false,
      expired: false
    )
  }

  before(:each) do
    assign(:map_point, map_point)
  end

  it "renders the edit map_point form" do
    render

    assert_select "form[action=?][method=?]", map_point_path(map_point), "post" do

      assert_select "input[name=?]", "map_point[coordinates]"

      assert_select "input[name=?]", "map_point[mapable_id]"

      assert_select "input[name=?]", "map_point[map_user_id]"

      assert_select "input[name=?]", "map_point[verified]"

      assert_select "input[name=?]", "map_point[expired]"
    end
  end
end
