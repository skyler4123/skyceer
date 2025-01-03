class CalendarCategoryAppointment < ApplicationRecord
  belongs_to :calendar_category
  belongs_to :calendar_category_appointmentable, polymorphic: true
end
