class ReportOwner < ApplicationRecord
  belongs_to :report_ownerable, polymorphic: true

  has_many :report_reporters, dependent: :destroy
  has_many :report_categories, dependent: :destroy
  has_many :report_tickets, dependent: :destroy
end
