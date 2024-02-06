require 'rails_helper'

RSpec.describe "calendar_schedules/show", type: :view do
  before(:each) do
    assign(:calendar_schedule, CalendarSchedule.create!(
      calendar_user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
