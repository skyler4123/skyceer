class ProjectSubtask < ApplicationRecord
  belongs_to :project_task
  has_many :project_subtask_appointments, dependent: :destroy
end
