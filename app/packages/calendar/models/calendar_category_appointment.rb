class CalendarCategoryAppointment < ApplicationRecord
  belongs_to :calendar_category
  belongs_to :appoint_to, polymorphic: true
end
