class CalendarOwner < ApplicationRecord
  belongs_to :calendar_ownerable, polymorphic: true

  has_many :calendar_groups, dependent: :destroy
  has_many :calendar_events, dependent: :destroy
  has_many :calendar_categories, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { scope: [ :calendar_ownerable_type, :calendar_ownerable_id ] }
  validates :uid, uniqueness: true, allow_blank: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email format" }
end
