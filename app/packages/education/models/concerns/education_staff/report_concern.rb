module EducationStaff::ReportConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :report_reporter, as: :report_reporterable, dependent: :destroy
  end

end
