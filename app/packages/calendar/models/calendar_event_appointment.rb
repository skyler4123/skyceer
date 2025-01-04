class CalendarEventAppointment < ApplicationRecord
  belongs_to :calendar_event
  belongs_to :calendar_event_appointmentable, polymorphic: true
end
