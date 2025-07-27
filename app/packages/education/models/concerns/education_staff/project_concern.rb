module EducationStaff::ProjectConcern
  extend ActiveSupport::Concern
  
  included do
    # has_many :project_group_appointments, as: :appoint_to, dependent: :destroy
    # has_many :project_groups, through: :project_group_appointments
    # has_many :project_task_appointments, as: :appoint_to, dependent: :destroy
    # has_many :project_tasks, through: :project_task_appointments
    # has_many :project_subtask_appointments, as: :appoint_to, dependent: :destroy
    # has_many :project_subtasks, through: :project_subtask_appointments
    has_one :project_member, as: :project_memberable, dependent: :destroy
  end

end
