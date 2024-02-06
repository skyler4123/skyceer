require 'rails_helper'

RSpec.describe "calendar_users/new", type: :view do
  before(:each) do
    assign(:calendar_user, CalendarUser.new(
      user: nil,
      name: "MyString"
    ))
  end

  it "renders new calendar_user form" do
    render

    assert_select "form[action=?][method=?]", calendar_users_path, "post" do

      assert_select "input[name=?]", "calendar_user[user_id]"

      assert_select "input[name=?]", "calendar_user[name]"
    end
  end
end
