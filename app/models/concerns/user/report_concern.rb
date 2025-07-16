module User::ReportConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :report_owner, as: :report_ownerable, dependent: :destroy
  end
end
