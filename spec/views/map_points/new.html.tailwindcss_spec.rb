require 'rails_helper'

RSpec.describe "map_points/new", type: :view do
  before(:each) do
    assign(:map_point, MapPoint.new(
      coordinates: "9.99",
      mapable: nil,
      map_user: nil,
      verified: false,
      expired: false
    ))
  end

  it "renders new map_point form" do
    render

    assert_select "form[action=?][method=?]", map_points_path, "post" do

      assert_select "input[name=?]", "map_point[coordinates]"

      assert_select "input[name=?]", "map_point[mapable_id]"

      assert_select "input[name=?]", "map_point[map_user_id]"

      assert_select "input[name=?]", "map_point[verified]"

      assert_select "input[name=?]", "map_point[expired]"
    end
  end
end
