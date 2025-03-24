class ReportCategoryAppointment < ApplicationRecord
  belongs_to :report_category
  belongs_to :appoint_to, polymorphic: true
end
