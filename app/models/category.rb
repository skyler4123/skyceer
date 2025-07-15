class Category < ApplicationRecord
  include CategoryConcern

  has_many :category_appointments, dependent: :destroy
  has_many :addresses, through: :category_appointments, source: :appoint_to, source_type: 'Address'
  # has_many :report_tickets, through: :category_appointments, source: :appoint_to, source_type: 'ReportTask'
  # has_many :report_frontends, through: :category_appointments, source: :appoint_to, source_type: 'ReportFrontend'
end
