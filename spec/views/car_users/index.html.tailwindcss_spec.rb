require 'rails_helper'

RSpec.describe "car_users/index", type: :view do
  before(:each) do
    assign(:car_users, [
      CarUser.create!(
        user: nil
      ),
      CarUser.create!(
        user: nil
      )
    ])
  end

  it "renders a list of car_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
