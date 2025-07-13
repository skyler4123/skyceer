class ProjectGroupAppointment < ApplicationRecord
  belongs_to :project_group
  belongs_to :appoint_to, polymorphic: true
end
