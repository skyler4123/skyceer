class ReportCategory < ApplicationRecord
  include CategoryConcern

  belongs_to :report_owner
  has_many :report_category_appointments, dependent: :destroy
  has_many :report_tickets, through: :report_category_appointments, source: :appoint_to, source_type: "ReportTicket"
  has_many :report_tickets, through: :report_category_appointments, source: :appoint_to, source_type: "ReportTicket"
end
