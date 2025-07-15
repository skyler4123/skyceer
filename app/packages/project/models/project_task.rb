class ProjectTask < ApplicationRecord
  belongs_to :project_group
  has_many :project_subtasks, dependent: :destroy
  has_many :project_task_appointments, dependent: :destroy
end
