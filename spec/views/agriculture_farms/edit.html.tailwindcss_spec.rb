require 'rails_helper'

RSpec.describe "agriculture_farms/edit", type: :view do
  let(:agriculture_farm) {
    AgricultureFarm.create!(
      agriculture_farmer: nil
    )
  }

  before(:each) do
    assign(:agriculture_farm, agriculture_farm)
  end

  it "renders the edit agriculture_farm form" do
    render

    assert_select "form[action=?][method=?]", agriculture_farm_path(agriculture_farm), "post" do

      assert_select "input[name=?]", "agriculture_farm[agriculture_farmer_id]"
    end
  end
end
