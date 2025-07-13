class ProjectGroup < ApplicationRecord
  belongs_to :project_group_ownerable, polymorphic: true
  has_many :project_group_appointments, dependent: :destroy
  has_many :project_tickets, dependent: :destroy
  has_many :project_subtickets, dependent: :destroy
end
