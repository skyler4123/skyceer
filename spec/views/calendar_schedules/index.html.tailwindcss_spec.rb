require 'rails_helper'

RSpec.describe "calendar_schedules/index", type: :view do
  before(:each) do
    assign(:calendar_schedules, [
      CalendarSchedule.create!(
        calendar_user: nil
      ),
      CalendarSchedule.create!(
        calendar_user: nil
      )
    ])
  end

  it "renders a list of calendar_schedules" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
