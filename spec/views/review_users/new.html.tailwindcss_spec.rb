require 'rails_helper'

RSpec.describe "review_users/new", type: :view do
  before(:each) do
    assign(:review_user, ReviewUser.new(
      user_id: "MyString"
    ))
  end

  it "renders new review_user form" do
    render

    assert_select "form[action=?][method=?]", review_users_path, "post" do

      assert_select "input[name=?]", "review_user[user_id]"
    end
  end
end
