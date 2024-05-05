require 'rails_helper'

RSpec.describe "car_users/edit", type: :view do
  let(:car_user) {
    CarUser.create!(
      user: nil
    )
  }

  before(:each) do
    assign(:car_user, car_user)
  end

  it "renders the edit car_user form" do
    render

    assert_select "form[action=?][method=?]", car_user_path(car_user), "post" do

      assert_select "input[name=?]", "car_user[user_id]"
    end
  end
end
