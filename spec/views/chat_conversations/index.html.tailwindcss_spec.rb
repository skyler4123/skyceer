require 'rails_helper'

RSpec.describe "chat_conversations/index", type: :view do
  before(:each) do
    assign(:chat_conversations, [
      ChatConversation.create!(),
      ChatConversation.create!()
    ])
  end

  it "renders a list of chat_conversations" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
