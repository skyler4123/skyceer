require 'rails_helper'

RSpec.describe "chat_rooms/edit", type: :view do
  let(:chat_room) {
    ChatRoom.create!()
  }

  before(:each) do
    assign(:chat_room, chat_room)
  end

  it "renders the edit chat_room form" do
    render

    assert_select "form[action=?][method=?]", chat_room_path(chat_room), "post" do
    end
  end
end
