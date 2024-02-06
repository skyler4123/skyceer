require 'rails_helper'

RSpec.describe "calendar_events/show", type: :view do
  before(:each) do
    assign(:calendar_event, CalendarEvent.create!(
      calendar_user: nil,
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Name/)
  end
end
