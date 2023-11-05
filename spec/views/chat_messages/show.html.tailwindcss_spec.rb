require 'rails_helper'

RSpec.describe "chat_messages/show", type: :view do
  before(:each) do
    assign(:chat_message, ChatMessage.create!(
      chat_user_id: "Chat User",
      content: "Content"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Chat User/)
    expect(rendered).to match(/Content/)
  end
end
