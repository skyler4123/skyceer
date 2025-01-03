module User::ReportConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :report_user, as: :report_userable, dependent: :destroy
  end
end
