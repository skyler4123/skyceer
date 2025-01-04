class CalendarUser < ApplicationRecord
  belongs_to :calendar_userable, polymorphic: true
  has_many :calendar_categories, dependent: :destroy

  has_many :calendar_groups, dependent: :destroy
  has_many :calendar_events, dependent: :destroy
end
