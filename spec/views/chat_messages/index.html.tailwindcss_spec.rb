require 'rails_helper'

RSpec.describe "chat_messages/index", type: :view do
  before(:each) do
    assign(:chat_messages, [
      ChatMessage.create!(
        chat_user_id: "Chat User",
        content: "Content"
      ),
      ChatMessage.create!(
        chat_user_id: "Chat User",
        content: "Content"
      )
    ])
  end

  it "renders a list of chat_messages" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Chat User".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Content".to_s), count: 2
  end
end
