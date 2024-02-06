require 'rails_helper'

RSpec.describe "calendar_schedules/edit", type: :view do
  let(:calendar_schedule) {
    CalendarSchedule.create!(
      calendar_user: nil
    )
  }

  before(:each) do
    assign(:calendar_schedule, calendar_schedule)
  end

  it "renders the edit calendar_schedule form" do
    render

    assert_select "form[action=?][method=?]", calendar_schedule_path(calendar_schedule), "post" do

      assert_select "input[name=?]", "calendar_schedule[calendar_user_id]"
    end
  end
end
