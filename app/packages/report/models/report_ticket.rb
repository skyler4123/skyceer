class ReportTask < ApplicationRecord
  include ReportTask::ImagesConcern

  belongs_to :report_user, optional: true
  has_many :report_category_appointments, as: :appoint_to
  has_many :report_categories, through: :report_category_appointments
end
