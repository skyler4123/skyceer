require 'rails_helper'

RSpec.describe "agriculture_farms/new", type: :view do
  before(:each) do
    assign(:agriculture_farm, AgricultureFarm.new(
      agriculture_farmer: nil
    ))
  end

  it "renders new agriculture_farm form" do
    render

    assert_select "form[action=?][method=?]", agriculture_farms_path, "post" do

      assert_select "input[name=?]", "agriculture_farm[agriculture_farmer_id]"
    end
  end
end
