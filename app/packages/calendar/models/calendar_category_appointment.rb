class CalendarCategoryAppointment < ApplicationRecord
  belongs_to :calendar_category
  belongs_to :calendar_group, optional: true
  belongs_to :calendar_event, optional: true
end
