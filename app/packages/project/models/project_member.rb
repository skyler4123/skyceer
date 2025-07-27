class ProjectMember < ApplicationRecord
  belongs_to :project_owner
  belongs_to :project_memberable, polymorphic: true

  has_many :project_group_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_groups, through: :project_group_appointments
  has_many :project_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_categories, through: :project_category_appointments
  has_many :project_task_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_tasks, through: :project_task_appointments
  has_many :project_subtask_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_subtasks, through: :project_subtask_appointments
end
