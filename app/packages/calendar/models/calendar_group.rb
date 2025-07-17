class CalendarGroup < ApplicationRecord
  belongs_to :calendar_owner

  has_many :calendar_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :calendar_categories, through: :calendar_category_appointments

  has_many :calendar_events, dependent: :destroy
end
