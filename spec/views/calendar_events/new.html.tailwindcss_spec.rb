require 'rails_helper'

RSpec.describe "calendar_events/new", type: :view do
  before(:each) do
    assign(:calendar_event, CalendarEvent.new(
      calendar_user: nil,
      name: "MyString"
    ))
  end

  it "renders new calendar_event form" do
    render

    assert_select "form[action=?][method=?]", calendar_events_path, "post" do

      assert_select "input[name=?]", "calendar_event[calendar_user_id]"

      assert_select "input[name=?]", "calendar_event[name]"
    end
  end
end
