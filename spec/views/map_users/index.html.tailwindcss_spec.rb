require 'rails_helper'

RSpec.describe "map_users/index", type: :view do
  before(:each) do
    assign(:map_users, [
      MapUser.create!(
        user: nil,
        name: "Name"
      ),
      MapUser.create!(
        user: nil,
        name: "Name"
      )
    ])
  end

  it "renders a list of map_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
  end
end
