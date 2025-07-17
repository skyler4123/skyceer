class ProjectCategory < ApplicationRecord
  belongs_to :project_owner

  has_many :project_category_appointments, dependent: :destroy
  has_many :project_groups, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectGroup'
  has_many :project_members, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectMember'
  has_many :project_tasks, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectTask'
  has_many :project_subtasks, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectSubtask'
end
