require 'rails_helper'

RSpec.describe "chat_users/show", type: :view do
  before(:each) do
    assign(:chat_user, ChatUser.create!(
      user_id: "User"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/User/)
  end
end
