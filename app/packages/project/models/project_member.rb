class ProjectMember < ApplicationRecord
  belongs_to :project_memberable, polymorphic: true
  belongs_to :project_group

  has_many :project_tickets, dependent: :destroy
  has_many :project_subtickets, dependent: :destroy
end
