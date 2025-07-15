class ProjectTaskAppointment < ApplicationRecord
  belongs_to :project_task
  belongs_to :appoint_to, polymorphic: true
end
