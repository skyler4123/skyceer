require 'rails_helper'

RSpec.describe "car_brands/new", type: :view do
  before(:each) do
    assign(:car_brand, CarBrand.new(
      name: "MyString"
    ))
  end

  it "renders new car_brand form" do
    render

    assert_select "form[action=?][method=?]", car_brands_path, "post" do

      assert_select "input[name=?]", "car_brand[name]"
    end
  end
end
