class ProjectTicket < ApplicationRecord
  belongs_to :project_group
  has_many :project_subtickets, dependent: :destroy
  has_many :project_ticket_appointments, dependent: :destroy
end
