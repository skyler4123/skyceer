require 'rails_helper'

RSpec.describe "chat_conversations/edit", type: :view do
  let(:chat_conversation) {
    ChatConversation.create!()
  }

  before(:each) do
    assign(:chat_conversation, chat_conversation)
  end

  it "renders the edit chat_conversation form" do
    render

    assert_select "form[action=?][method=?]", chat_conversation_path(chat_conversation), "post" do
    end
  end
end
