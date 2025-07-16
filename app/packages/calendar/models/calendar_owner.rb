class CalendarOwner < ApplicationRecord
  belongs_to :calendar_ownerable, polymorphic: true

  has_many :calendar_groups, dependent: :destroy
  has_many :calendar_events, dependent: :destroy
  has_many :calendar_categories, dependent: :destroy
end
