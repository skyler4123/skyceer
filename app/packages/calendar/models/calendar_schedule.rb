class CalendarSchedule < ApplicationRecord
  belongs_to :calendar_user
  has_many :calendar_events, dependent: :destroy
end
