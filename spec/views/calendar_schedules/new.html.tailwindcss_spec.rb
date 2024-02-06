require 'rails_helper'

RSpec.describe "calendar_schedules/new", type: :view do
  before(:each) do
    assign(:calendar_schedule, CalendarSchedule.new(
      calendar_user: nil
    ))
  end

  it "renders new calendar_schedule form" do
    render

    assert_select "form[action=?][method=?]", calendar_schedules_path, "post" do

      assert_select "input[name=?]", "calendar_schedule[calendar_user_id]"
    end
  end
end
