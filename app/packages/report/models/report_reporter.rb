class ReportReporter < ApplicationRecord
  belongs_to :report_owner
  belongs_to :report_reporterable, polymorphic: true

  has_many :report_tickets, dependent: :destroy
end
