class CalendarEvent < ApplicationRecord
  belongs_to :calendar_user
  belongs_to :calendar_eventable, polymorphic: true

  has_many :calendar_event_appointments, dependent: :destroy
  has_many :calendar_groups, through: :calendar_event_appointments
  has_many :calendar_category_appointments, dependent: :destroy
  has_many :calendar_categories, through: :calendar_category_appointments

  enum :library, { tui: 0 }
  enum :category, { milestone: 0, task: 1, allday: 2, time: 3 }
  enum :state, { "Busy" => 0, "Free" => 1 }

  def calendarId
    self.calendar_group_id
  end
end
