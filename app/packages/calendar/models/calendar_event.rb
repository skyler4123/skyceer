class CalendarEvent < ApplicationRecord
  belongs_to :calendar_group, optional: true

  enum :lib, { tui: 0 }
  enum :category, { milestone: 0, task: 1, allday: 2, time: 3 }
  enum :state, { "Busy" => 0, "Free" => 1 }

  def calendarId
    self.calendar_group_id
  end
end
