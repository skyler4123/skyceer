require 'rails_helper'

RSpec.describe "map_users/edit", type: :view do
  let(:map_user) {
    MapUser.create!(
      user: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:map_user, map_user)
  end

  it "renders the edit map_user form" do
    render

    assert_select "form[action=?][method=?]", map_user_path(map_user), "post" do

      assert_select "input[name=?]", "map_user[user_id]"

      assert_select "input[name=?]", "map_user[name]"
    end
  end
end
