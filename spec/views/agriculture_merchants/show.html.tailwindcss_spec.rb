require 'rails_helper'

RSpec.describe "agriculture_merchants/show", type: :view do
  before(:each) do
    assign(:agriculture_merchant, AgricultureMerchant.create!(
      agriculture_user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
