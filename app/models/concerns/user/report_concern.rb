module User::ReportConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :report_user, as: :report_ownerable, dependent: :destroy
  end
end
