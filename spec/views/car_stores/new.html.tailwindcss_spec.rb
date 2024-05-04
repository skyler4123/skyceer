require 'rails_helper'

RSpec.describe "car_stores/new", type: :view do
  before(:each) do
    assign(:car_store, CarStore.new(
      name: "MyString",
      car_user: nil,
      coordinates: "9.99"
    ))
  end

  it "renders new car_store form" do
    render

    assert_select "form[action=?][method=?]", car_stores_path, "post" do

      assert_select "input[name=?]", "car_store[name]"

      assert_select "input[name=?]", "car_store[car_user_id]"

      assert_select "input[name=?]", "car_store[coordinates]"
    end
  end
end
