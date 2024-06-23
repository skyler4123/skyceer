require 'rails_helper'

RSpec.describe "vehicle_users/index", type: :view do
  before(:each) do
    assign(:vehicle_users, [
      VehicleUser.create!(
        user: nil
      ),
      VehicleUser.create!(
        user: nil
      )
    ])
  end

  it "renders a list of vehicle_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
