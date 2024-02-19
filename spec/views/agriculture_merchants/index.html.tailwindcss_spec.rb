require 'rails_helper'

RSpec.describe "agriculture_merchants/index", type: :view do
  before(:each) do
    assign(:agriculture_merchants, [
      AgricultureMerchant.create!(
        agriculture_user: nil
      ),
      AgricultureMerchant.create!(
        agriculture_user: nil
      )
    ])
  end

  it "renders a list of agriculture_merchants" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
