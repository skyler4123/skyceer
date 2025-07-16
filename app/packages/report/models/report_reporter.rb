class ReportReporter < ApplicationRecord
  belongs_to :report_owner
  has_many :report_tickets, dependent: :destroy
end
