class CalendarGroup < ApplicationRecord
  belongs_to :user
  has_many :calendar_events, dependent: :destroy
end
