require 'rails_helper'

RSpec.describe "calendar_events/edit", type: :view do
  let(:calendar_event) {
    CalendarEvent.create!(
      calendar_user: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:calendar_event, calendar_event)
  end

  it "renders the edit calendar_event form" do
    render

    assert_select "form[action=?][method=?]", calendar_event_path(calendar_event), "post" do

      assert_select "input[name=?]", "calendar_event[calendar_user_id]"

      assert_select "input[name=?]", "calendar_event[name]"
    end
  end
end
