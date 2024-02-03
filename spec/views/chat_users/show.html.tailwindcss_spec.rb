require 'rails_helper'

RSpec.describe "chat_users/show", type: :view do
  before(:each) do
    assign(:chat_user, ChatUser.create!(
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
