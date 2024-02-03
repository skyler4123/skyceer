require 'rails_helper'

RSpec.describe "chat_messages/show", type: :view do
  before(:each) do
    assign(:chat_message, ChatMessage.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
