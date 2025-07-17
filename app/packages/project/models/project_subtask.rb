class ProjectSubtask < ApplicationRecord
  belongs_to :project_owner
  belongs_to :project_group
  belongs_to :project_task

    has_many :project_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :project_categories, through: :project_category_appointments
end
