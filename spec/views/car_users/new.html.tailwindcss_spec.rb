require 'rails_helper'

RSpec.describe "car_users/new", type: :view do
  before(:each) do
    assign(:car_user, CarUser.new(
      user: nil
    ))
  end

  it "renders new car_user form" do
    render

    assert_select "form[action=?][method=?]", car_users_path, "post" do

      assert_select "input[name=?]", "car_user[user_id]"
    end
  end
end
