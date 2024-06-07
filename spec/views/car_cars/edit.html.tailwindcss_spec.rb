require 'rails_helper'

RSpec.describe "car_cars/edit", type: :view do
  let(:car_car) {
    CarCar.create!(
      name: "MyString",
      model: "MyString",
      car_brand: nil,
      car_user: nil,
      price: "9.99",
      version: "MyString",
      coordinates: "9.99",
      verified: false,
      expired: false
    )
  }

  before(:each) do
    assign(:car_car, car_car)
  end

  it "renders the edit car_car form" do
    render

    assert_select "form[action=?][method=?]", car_car_path(car_car), "post" do

      assert_select "input[name=?]", "car_car[name]"

      assert_select "input[name=?]", "car_car[model]"

      assert_select "input[name=?]", "car_car[brand]"

      assert_select "input[name=?]", "car_car[car_user_id]"

      assert_select "input[name=?]", "car_car[price]"

      assert_select "input[name=?]", "car_car[version]"

      assert_select "input[name=?]", "car_car[coordinates]"

      assert_select "input[name=?]", "car_car[verified]"

      assert_select "input[name=?]", "car_car[expired]"
    end
  end
end
