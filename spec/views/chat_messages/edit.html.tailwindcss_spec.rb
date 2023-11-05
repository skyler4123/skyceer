require 'rails_helper'

RSpec.describe "chat_messages/edit", type: :view do
  let(:chat_message) {
    ChatMessage.create!(
      chat_user_id: "MyString",
      content: "MyString"
    )
  }

  before(:each) do
    assign(:chat_message, chat_message)
  end

  it "renders the edit chat_message form" do
    render

    assert_select "form[action=?][method=?]", chat_message_path(chat_message), "post" do

      assert_select "input[name=?]", "chat_message[chat_user_id]"

      assert_select "input[name=?]", "chat_message[content]"
    end
  end
end
