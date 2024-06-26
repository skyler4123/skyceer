require 'rails_helper'

RSpec.describe "vehicle_cars/index", type: :view do
  before(:each) do
    assign(:vehicle_cars, [
      VehicleCar.create!(
        name: "Name",
        model: "Model",
        vehicle_brand: nil,
        vehicle_user: nil,
        price: "9.99",
        version: "Version",
        coordinates: "9.99",
        verified: false,
        expired: false
      ),
      VehicleCar.create!(
        name: "Name",
        model: "Model",
        vehicle_brand: nil,
        vehicle_user: nil,
        price: "9.99",
        version: "Version",
        coordinates: "9.99",
        verified: false,
        expired: false
      )
    ])
  end

  it "renders a list of vehicle_cars" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Model".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Version".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
  end
end
