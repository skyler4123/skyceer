require 'rails_helper'

RSpec.describe "car_stores/edit", type: :view do
  let(:car_store) {
    CarStore.create!(
      name: "MyString",
      car_user: nil,
      coordinates: "9.99"
    )
  }

  before(:each) do
    assign(:car_store, car_store)
  end

  it "renders the edit car_store form" do
    render

    assert_select "form[action=?][method=?]", car_store_path(car_store), "post" do

      assert_select "input[name=?]", "car_store[name]"

      assert_select "input[name=?]", "car_store[car_user_id]"

      assert_select "input[name=?]", "car_store[coordinates]"
    end
  end
end
