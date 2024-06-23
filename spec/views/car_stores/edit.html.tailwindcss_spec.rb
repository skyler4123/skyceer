require 'rails_helper'

RSpec.describe "vehicle_stores/edit", type: :view do
  let(:vehicle_store) {
    VehicleStore.create!(
      name: "MyString",
      vehicle_user: nil,
      coordinates: "9.99"
    )
  }

  before(:each) do
    assign(:vehicle_store, vehicle_store)
  end

  it "renders the edit vehicle_store form" do
    render

    assert_select "form[action=?][method=?]", vehicle_store_path(vehicle_store), "post" do

      assert_select "input[name=?]", "vehicle_store[name]"

      assert_select "input[name=?]", "vehicle_store[vehicle_user_id]"

      assert_select "input[name=?]", "vehicle_store[coordinates]"
    end
  end
end
