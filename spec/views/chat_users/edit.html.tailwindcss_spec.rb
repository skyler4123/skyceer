require 'rails_helper'

RSpec.describe "chat_users/edit", type: :view do
  let(:chat_user) {
    ChatUser.create!(
      user_id: "MyString"
    )
  }

  before(:each) do
    assign(:chat_user, chat_user)
  end

  it "renders the edit chat_user form" do
    render

    assert_select "form[action=?][method=?]", chat_user_path(chat_user), "post" do

      assert_select "input[name=?]", "chat_user[user_id]"
    end
  end
end
