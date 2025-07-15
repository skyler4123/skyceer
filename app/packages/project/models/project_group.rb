class ProjectGroup < ApplicationRecord
  belongs_to :project_ownerable, polymorphic: true
  has_many :project_members, dependent: :destroy
  has_many :project_tasks, dependent: :destroy
  has_many :project_subtasks, dependent: :destroy
end
