class CalendarEvent < ApplicationRecord
  belongs_to :calendar_user

  enum category: { milestone: 0, task: 1, allday: 2, time: 3 }
  enum state: { "Busy" => 0, "Free" => 1 }
end
