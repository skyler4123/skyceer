require 'rails_helper'

RSpec.describe "chat_messages/index", type: :view do
  before(:each) do
    assign(:chat_messages, [
      ChatMessage.create!(),
      ChatMessage.create!()
    ])
  end

  it "renders a list of chat_messages" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
