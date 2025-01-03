class ReportCategory < ApplicationRecord
  include CategoryConcern
  has_many :report_category_appointments, dependent: :destroy
  has_many :report_tickets, through: :report_category_appointments, source: :report_category_appointmentable, source_type: 'ReportTicket'
  has_many :report_tickets, through: :report_category_appointments, source: :report_category_appointmentable, source_type: 'ReportTicket'
end
