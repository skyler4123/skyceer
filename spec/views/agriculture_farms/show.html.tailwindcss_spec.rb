require 'rails_helper'

RSpec.describe "agriculture_farms/show", type: :view do
  before(:each) do
    assign(:agriculture_farm, AgricultureFarm.create!(
      agriculture_farmer: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
