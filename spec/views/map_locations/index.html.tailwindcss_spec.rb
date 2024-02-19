require 'rails_helper'

RSpec.describe "map_locations/index", type: :view do
  before(:each) do
    assign(:map_locations, [
      MapLocation.create!(
        name: "Name"
      ),
      MapLocation.create!(
        name: "Name"
      )
    ])
  end

  it "renders a list of map_locations" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
  end
end
