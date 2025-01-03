class CalendarCategory < ApplicationRecord
  include CategoryConcern
  
  belongs_to :calendar_user

  has_many :calendar_category_appointments, dependent: :destroy
  has_many :calendar_events, through: :calendar_category_appointments
  has_many :calendar_groups, through: :calendar_category_appointments

end
