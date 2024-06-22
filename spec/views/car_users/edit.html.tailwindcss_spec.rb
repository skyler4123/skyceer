require 'rails_helper'

RSpec.describe "vehicle_users/edit", type: :view do
  let(:vehicle_user) {
    VehicleUser.create!(
      user: nil
    )
  }

  before(:each) do
    assign(:vehicle_user, vehicle_user)
  end

  it "renders the edit vehicle_user form" do
    render

    assert_select "form[action=?][method=?]", vehicle_user_path(vehicle_user), "post" do

      assert_select "input[name=?]", "vehicle_user[user_id]"
    end
  end
end
