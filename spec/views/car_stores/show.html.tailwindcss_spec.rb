require 'rails_helper'

RSpec.describe "vehicle_stores/show", type: :view do
  before(:each) do
    assign(:vehicle_store, VehicleStore.create!(
      name: "Name",
      vehicle_user: nil,
      coordinates: "9.99"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(//)
    expect(rendered).to match(/9.99/)
  end
end
