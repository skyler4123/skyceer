require 'rails_helper'

RSpec.describe "vehicle_stores/index", type: :view do
  before(:each) do
    assign(:vehicle_stores, [
      VehicleStore.create!(
        name: "Name",
        vehicle_user: nil,
        coordinates: "9.99"
      ),
      VehicleStore.create!(
        name: "Name",
        vehicle_user: nil,
        coordinates: "9.99"
      )
    ])
  end

  it "renders a list of vehicle_stores" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
  end
end
