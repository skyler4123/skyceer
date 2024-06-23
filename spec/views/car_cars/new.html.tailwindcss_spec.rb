require 'rails_helper'

RSpec.describe "vehicle_cars/new", type: :view do
  before(:each) do
    assign(:vehicle_car, VehicleCar.new(
      name: "MyString",
      model: "MyString",
      vehicle_brand: nil,
      vehicle_user: nil,
      price: "9.99",
      version: "MyString",
      coordinates: "9.99",
      verified: false,
      expired: false
    ))
  end

  it "renders new vehicle_car form" do
    render

    assert_select "form[action=?][method=?]", vehicle_cars_path, "post" do

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
