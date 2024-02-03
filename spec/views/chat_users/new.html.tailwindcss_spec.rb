require 'rails_helper'

RSpec.describe "chat_users/new", type: :view do
  before(:each) do
    assign(:chat_user, ChatUser.new(
      user: nil
    ))
  end

  it "renders new chat_user form" do
    render

    assert_select "form[action=?][method=?]", chat_users_path, "post" do

      assert_select "input[name=?]", "chat_user[user_id]"
    end
  end
end
