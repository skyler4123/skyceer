class ProjectTask < ApplicationRecord
  belongs_to :project_owner
  belongs_to :project_group

  has_many :project_subtasks, dependent: :destroy
  has_many :project_task_appointments, dependent: :destroy
  has_many :project_members, through: :project_task_appointments, source: :appoint_to, source_type: "ProjectMember"
  has_many :project_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_categories, through: :project_category_appointments
  has_many :project_subtasks, dependent: :destroy
end
