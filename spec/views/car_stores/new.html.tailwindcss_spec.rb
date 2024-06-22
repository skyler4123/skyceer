require 'rails_helper'

RSpec.describe "vehicle_stores/new", type: :view do
  before(:each) do
    assign(:vehicle_store, VehicleStore.new(
      name: "MyString",
      vehicle_user: nil,
      coordinates: "9.99"
    ))
  end

  it "renders new vehicle_store form" do
    render

    assert_select "form[action=?][method=?]", vehicle_stores_path, "post" do

      assert_select "input[name=?]", "vehicle_store[name]"

      assert_select "input[name=?]", "vehicle_store[vehicle_user_id]"

      assert_select "input[name=?]", "vehicle_store[coordinates]"
    end
  end
end
