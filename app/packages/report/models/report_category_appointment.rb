class ReportCategoryAppointment < ApplicationRecord
  belongs_to :report_category
  belongs_to :report_category_appointmentable, polymorphic: true
end
