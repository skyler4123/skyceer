class ReportFrontend < ApplicationRecord
  belongs_to :report_user, optional: true
  has_many :report_category_appointments, as: :report_category_appointmentable
  has_many :report_categories, through: :report_category_appointments
end
