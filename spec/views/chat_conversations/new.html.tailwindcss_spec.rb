require 'rails_helper'

RSpec.describe "chat_conversations/new", type: :view do
  before(:each) do
    assign(:chat_conversation, ChatConversation.new())
  end

  it "renders new chat_conversation form" do
    render

    assert_select "form[action=?][method=?]", chat_conversations_path, "post" do
    end
  end
end
