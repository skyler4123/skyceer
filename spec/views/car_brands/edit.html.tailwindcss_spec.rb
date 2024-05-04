require 'rails_helper'

RSpec.describe "car_brands/edit", type: :view do
  let(:car_brand) {
    CarBrand.create!(
      name: "MyString"
    )
  }

  before(:each) do
    assign(:car_brand, car_brand)
  end

  it "renders the edit car_brand form" do
    render

    assert_select "form[action=?][method=?]", car_brand_path(car_brand), "post" do

      assert_select "input[name=?]", "car_brand[name]"
    end
  end
end
