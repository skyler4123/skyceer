class CalendarGroup < ApplicationRecord
  belongs_to :calendar_user
  belongs_to :calendar_groupable, polymorphic: true
  has_many :calendar_event_appointments, dependent: :destroy
  has_many :calendar_events, through: :calendar_event_appointments
  has_many :calendar_category_appointments, dependent: :destroy
  has_many :calendar_categories, through: :calendar_category_appointments
end
