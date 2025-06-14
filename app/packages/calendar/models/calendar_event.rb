class CalendarEvent < ApplicationRecord
  
  belongs_to :calendar_ownerable, polymorphic: true
  belongs_to :calendar_groupable, polymorphic: true

  has_many :calendar_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :calendar_categories, through: :calendar_category_appointments

  enum :library, { tui: 0 }
  enum :category, { milestone: 0, task: 1, allday: 2, time: 3 }
  enum :state, { "Busy" => 0, "Free" => 1 }

end
