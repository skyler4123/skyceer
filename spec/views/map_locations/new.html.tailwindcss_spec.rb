require 'rails_helper'

RSpec.describe "map_locations/new", type: :view do
  before(:each) do
    assign(:map_location, MapLocation.new(
      name: "MyString"
    ))
  end

  it "renders new map_location form" do
    render

    assert_select "form[action=?][method=?]", map_locations_path, "post" do

      assert_select "input[name=?]", "map_location[name]"
    end
  end
end
