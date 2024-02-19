require 'rails_helper'

RSpec.describe "map_users/new", type: :view do
  before(:each) do
    assign(:map_user, MapUser.new(
      user: nil,
      name: "MyString"
    ))
  end

  it "renders new map_user form" do
    render

    assert_select "form[action=?][method=?]", map_users_path, "post" do

      assert_select "input[name=?]", "map_user[user_id]"

      assert_select "input[name=?]", "map_user[name]"
    end
  end
end
