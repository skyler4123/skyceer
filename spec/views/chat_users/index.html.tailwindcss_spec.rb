require 'rails_helper'

RSpec.describe "chat_users/index", type: :view do
  before(:each) do
    assign(:chat_users, [
      ChatUser.create!(
        user_id: "User"
      ),
      ChatUser.create!(
        user_id: "User"
      )
    ])
  end

  it "renders a list of chat_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("User".to_s), count: 2
  end
end
