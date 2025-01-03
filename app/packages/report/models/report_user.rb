class ReportUser < ApplicationRecord
  belongs_to :report_userable, polymorphic: true
  has_many :report_tickets, dependent: :destroy
  has_many :report_frontends, dependent: :destroy
end
