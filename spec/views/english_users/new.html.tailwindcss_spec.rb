require 'rails_helper'

RSpec.describe "english_users/new", type: :view do
  before(:each) do
    assign(:english_user, EnglishUser.new(
      user_id: "MyString"
    ))
  end

  it "renders new english_user form" do
    render

    assert_select "form[action=?][method=?]", english_users_path, "post" do

      assert_select "input[name=?]", "english_user[user_id]"
    end
  end
end
