class ProjectSubtaskAppointment < ApplicationRecord
  belongs_to :project_subtask
  belongs_to :appoint_to, polymorphic: true
end
