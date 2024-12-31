class CalendarEventAppointment < ApplicationRecord
  belongs_to :calendar_group, optional: true
  belongs_to :calendar_event
end
