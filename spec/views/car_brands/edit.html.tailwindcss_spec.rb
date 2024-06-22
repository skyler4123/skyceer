require 'rails_helper'

RSpec.describe "vehicle_brands/edit", type: :view do
  let(:vehicle_brand) {
    VehicleBrand.create!(
      name: "MyString"
    )
  }

  before(:each) do
    assign(:vehicle_brand, vehicle_brand)
  end

  it "renders the edit vehicle_brand form" do
    render

    assert_select "form[action=?][method=?]", vehicle_brand_path(vehicle_brand), "post" do

      assert_select "input[name=?]", "vehicle_brand[name]"
    end
  end
end
