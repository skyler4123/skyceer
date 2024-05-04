require 'rails_helper'

RSpec.describe "car_stores/index", type: :view do
  before(:each) do
    assign(:car_stores, [
      CarStore.create!(
        name: "Name",
        car_user: nil,
        coordinates: "9.99"
      ),
      CarStore.create!(
        name: "Name",
        car_user: nil,
        coordinates: "9.99"
      )
    ])
  end

  it "renders a list of car_stores" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
  end
end
