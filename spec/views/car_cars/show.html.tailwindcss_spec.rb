require 'rails_helper'

RSpec.describe "vehicle_cars/show", type: :view do
  before(:each) do
    assign(:vehicle_car, VehicleCar.create!(
      name: "Name",
      model: "Model",
      vehicle_brand: nil,
      vehicle_user: nil,
      price: "9.99",
      version: "Version",
      coordinates: "9.99",
      verified: false,
      expired: false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Model/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/Version/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/false/)
  end
end
