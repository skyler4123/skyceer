class ReportFrontend < ApplicationRecord
  belongs_to :user, optional: true
end
