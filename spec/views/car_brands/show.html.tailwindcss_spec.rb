require 'rails_helper'

RSpec.describe "car_brands/show", type: :view do
  before(:each) do
    assign(:car_brand, CarBrand.create!(
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
