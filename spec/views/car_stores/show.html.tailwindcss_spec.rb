require 'rails_helper'

RSpec.describe "car_stores/show", type: :view do
  before(:each) do
    assign(:car_store, CarStore.create!(
      name: "Name",
      car_user: nil,
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
