require 'rails_helper'

RSpec.describe "chat_messages/new", type: :view do
  before(:each) do
    assign(:chat_message, ChatMessage.new(
      chat_user_id: "MyString",
      content: "MyString"
    ))
  end

  it "renders new chat_message form" do
    render

    assert_select "form[action=?][method=?]", chat_messages_path, "post" do

      assert_select "input[name=?]", "chat_message[chat_user_id]"

      assert_select "input[name=?]", "chat_message[content]"
    end
  end
end
