class ProjectCategory < ApplicationRecord
  belongs_to :project_ownerable, polymorphic: true

  has_many :project_category_appointments, dependent: :destroy
  has_many :project_groups, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectGroup'
  has_many :project_tickets, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectTicket'
  has_many :project_subtickets, through: :project_category_appointments, source: :appoint_to, source_type: 'ProjectSubticket'
end
