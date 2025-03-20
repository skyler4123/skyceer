class CalendarCategory < ApplicationRecord
  include CategoryConcern
  
  belongs_to :calendar_userable, polymorphic: true

  has_many :calendar_category_appointments, dependent: :destroy
  has_many :calendar_events, through: :calendar_category_appointments, source: :calendar_category_appointmentable, source_type: 'CalendarEvent'

end
