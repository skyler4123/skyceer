class ReportFrontend < ApplicationRecord
  belongs_to :report_owner, optional: true
  has_many :report_category_appointments, as: :appoint_to
  has_many :report_categories, through: :report_category_appointments
end
