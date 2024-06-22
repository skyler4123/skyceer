require 'rails_helper'

RSpec.describe "vehicle_brands/index", type: :view do
  before(:each) do
    assign(:vehicle_brands, [
      VehicleBrand.create!(
        name: "Name"
      ),
      VehicleBrand.create!(
        name: "Name"
      )
    ])
  end

  it "renders a list of vehicle_brands" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
  end
end
