require 'rails_helper'

RSpec.describe "map_points/index", type: :view do
  before(:each) do
    assign(:map_points, [
      MapPoint.create!(
        coordinates: "9.99",
        mapable: nil,
        map_user: nil,
        verified: false,
        expired: false
      ),
      MapPoint.create!(
        coordinates: "9.99",
        mapable: nil,
        map_user: nil,
        verified: false,
        expired: false
      )
    ])
  end

  it "renders a list of map_points" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
  end
end
