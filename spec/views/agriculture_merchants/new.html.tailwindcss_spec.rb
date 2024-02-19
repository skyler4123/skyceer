require 'rails_helper'

RSpec.describe "agriculture_merchants/new", type: :view do
  before(:each) do
    assign(:agriculture_merchant, AgricultureMerchant.new(
      agriculture_user: nil
    ))
  end

  it "renders new agriculture_merchant form" do
    render

    assert_select "form[action=?][method=?]", agriculture_merchants_path, "post" do

      assert_select "input[name=?]", "agriculture_merchant[agriculture_user_id]"
    end
  end
end
