require 'rails_helper'

RSpec.describe "agriculture_merchants/edit", type: :view do
  let(:agriculture_merchant) {
    AgricultureMerchant.create!(
      agriculture_user: nil
    )
  }

  before(:each) do
    assign(:agriculture_merchant, agriculture_merchant)
  end

  it "renders the edit agriculture_merchant form" do
    render

    assert_select "form[action=?][method=?]", agriculture_merchant_path(agriculture_merchant), "post" do

      assert_select "input[name=?]", "agriculture_merchant[agriculture_user_id]"
    end
  end
end
