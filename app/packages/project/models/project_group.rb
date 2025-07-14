class ProjectGroup < ApplicationRecord
  belongs_to :project_ownerable, polymorphic: true
  has_many :project_members, dependent: :destroy
  has_many :project_tickets, dependent: :destroy
  has_many :project_subtickets, dependent: :destroy
end
