require 'rails_helper'

RSpec.describe "vehicle_brands/new", type: :view do
  before(:each) do
    assign(:vehicle_brand, VehicleBrand.new(
      name: "MyString"
    ))
  end

  it "renders new vehicle_brand form" do
    render

    assert_select "form[action=?][method=?]", vehicle_brands_path, "post" do

      assert_select "input[name=?]", "vehicle_brand[name]"
    end
  end
end
