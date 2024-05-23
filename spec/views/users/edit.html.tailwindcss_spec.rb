require 'rails_helper'

RSpec.describe "users/edit", type: :view do
  let(:user) {
    User.create!(
      email: "MyString",
      name: "MyString",
      verified: false
    )
  }

  before(:each) do
    assign(:user, user)
  end

  it "renders the edit user form" do
    render

    assert_select "form[action=?][method=?]", user_path(user), "post" do

      assert_select "input[name=?]", "user[email]"

      assert_select "input[name=?]", "user[name]"

      assert_select "input[name=?]", "user[verified]"
    end
  end
end
