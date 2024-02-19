require 'rails_helper'

RSpec.describe "agriculture_farms/index", type: :view do
  before(:each) do
    assign(:agriculture_farms, [
      AgricultureFarm.create!(
        agriculture_farmer: nil
      ),
      AgricultureFarm.create!(
        agriculture_farmer: nil
      )
    ])
  end

  it "renders a list of agriculture_farms" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
