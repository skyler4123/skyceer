require 'rails_helper'

RSpec.describe "calendar_users/index", type: :view do
  before(:each) do
    assign(:calendar_users, [
      CalendarUser.create!(
        user: nil,
        name: "Name"
      ),
      CalendarUser.create!(
        user: nil,
        name: "Name"
      )
    ])
  end

  it "renders a list of calendar_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
  end
end
