class CalendarCategory < ApplicationRecord
  include CategoryConcern
  
  belongs_to :calendar_ownerable, polymorphic: true

  has_many :calendar_category_appointments, dependent: :destroy
  has_many :calendar_events, through: :calendar_category_appointments, source: :appoint_to, source_type: 'CalendarEvent'

end
