class Category < ApplicationRecord
  include CategoryConcern

  has_many :category_appointments, dependent: :destroy
  has_many :addresses, through: :category_appointments, source: :category_appointmentable, source_type: 'Address'
  # has_many :report_tickets, through: :category_appointments, source: :category_appointmentable, source_type: 'ReportTicket'
  # has_many :report_frontends, through: :category_appointments, source: :category_appointmentable, source_type: 'ReportFrontend'
end
