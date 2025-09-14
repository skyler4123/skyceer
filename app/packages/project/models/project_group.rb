class ProjectGroup < ApplicationRecord
  belongs_to :project_owner

  has_many :project_group_appointments, dependent: :destroy
  has_many :project_members, through: :project_group_appointments, source: :appoint_to, source_type: "ProjectMember"
  has_many :project_tasks, dependent: :destroy
  has_many :project_subtasks, dependent: :destroy
  has_many :project_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_categories, through: :project_category_appointments
end
