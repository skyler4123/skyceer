class CalendarUser < ApplicationRecord
  belongs_to :user
  has_many :calendar_schedules, dependent: :destroy
  has_many :calendar_events, dependent: :destroy
end
