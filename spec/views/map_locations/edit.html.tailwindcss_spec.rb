require 'rails_helper'

RSpec.describe "map_locations/edit", type: :view do
  let(:map_location) {
    MapLocation.create!(
      name: "MyString"
    )
  }

  before(:each) do
    assign(:map_location, map_location)
  end

  it "renders the edit map_location form" do
    render

    assert_select "form[action=?][method=?]", map_location_path(map_location), "post" do

      assert_select "input[name=?]", "map_location[name]"
    end
  end
end
