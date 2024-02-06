require 'rails_helper'

RSpec.describe "calendar_users/edit", type: :view do
  let(:calendar_user) {
    CalendarUser.create!(
      user: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:calendar_user, calendar_user)
  end

  it "renders the edit calendar_user form" do
    render

    assert_select "form[action=?][method=?]", calendar_user_path(calendar_user), "post" do

      assert_select "input[name=?]", "calendar_user[user_id]"

      assert_select "input[name=?]", "calendar_user[name]"
    end
  end
end
