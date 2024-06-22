require 'rails_helper'

RSpec.describe "vehicle_cars/edit", type: :view do
  let(:vehicle_car) {
    VehicleCar.create!(
      name: "MyString",
      model: "MyString",
      vehicle_brand: nil,
      vehicle_user: nil,
      price: "9.99",
      version: "MyString",
      coordinates: "9.99",
      verified: false,
      expired: false
    )
  }

  before(:each) do
    assign(:vehicle_car, vehicle_car)
  end

  it "renders the edit vehicle_car form" do
    render

    assert_select "form[action=?][method=?]", vehicle_car_path(vehicle_car), "post" do

      assert_select "input[name=?]", "vehicle_car[name]"

      assert_select "input[name=?]", "vehicle_car[model]"

      assert_select "input[name=?]", "vehicle_car[brand]"

      assert_select "input[name=?]", "vehicle_car[vehicle_user_id]"

      assert_select "input[name=?]", "vehicle_car[price]"

      assert_select "input[name=?]", "vehicle_car[version]"

      assert_select "input[name=?]", "vehicle_car[coordinates]"

      assert_select "input[name=?]", "vehicle_car[verified]"

      assert_select "input[name=?]", "vehicle_car[expired]"
    end
  end
end
