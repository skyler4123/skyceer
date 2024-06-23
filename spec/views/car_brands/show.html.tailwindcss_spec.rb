require 'rails_helper'

RSpec.describe "vehicle_brands/show", type: :view do
  before(:each) do
    assign(:vehicle_brand, VehicleBrand.create!(
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
