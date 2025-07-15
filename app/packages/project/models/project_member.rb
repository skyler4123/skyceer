class ProjectMember < ApplicationRecord
  belongs_to :project_memberable, polymorphic: true
  belongs_to :project_group

  has_many :project_tasks, dependent: :destroy
  has_many :project_subtasks, dependent: :destroy
end
