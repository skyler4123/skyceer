class CalendarGroup < ApplicationRecord
  belongs_to :calendar_owner

  has_many :calendar_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :calendar_categories, through: :calendar_category_appointments

  has_many :calendar_events, dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :calendar_owner_id }
  # validates :status, inclusion: { in: [0, 1, 2], message: "%{value} is not a valid status" }
  # validates :position, numericality: { greater_than_or_equal_to: 0 }
  validates :color, format: { with: /\A#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\z/, message: "must be a valid hex color" }
end
