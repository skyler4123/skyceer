class CalendarGroup < ApplicationRecord
  belongs_to :calendar_user
  belongs_to :calendar_groupable, polymorphic: true

  has_many :calendar_category_appointments, as: :calendar_category_appointmentable, dependent: :destroy
  has_many :calendar_categories, through: :calendar_category_appointments
end
