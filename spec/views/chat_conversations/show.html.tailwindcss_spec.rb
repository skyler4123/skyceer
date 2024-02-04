require 'rails_helper'

RSpec.describe "chat_conversations/show", type: :view do
  before(:each) do
    assign(:chat_conversation, ChatConversation.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
