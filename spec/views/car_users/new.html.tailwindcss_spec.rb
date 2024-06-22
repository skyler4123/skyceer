require 'rails_helper'

RSpec.describe "vehicle_users/new", type: :view do
  before(:each) do
    assign(:vehicle_user, VehicleUser.new(
      user: nil
    ))
  end

  it "renders new vehicle_user form" do
    render

    assert_select "form[action=?][method=?]", vehicle_users_path, "post" do

      assert_select "input[name=?]", "vehicle_user[user_id]"
    end
  end
end
