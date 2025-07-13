module EducationStaff::ProjectConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :project_group_apointments, as: :appoint_to, dependent: :destroy
    has_many :project_groups, through: :project_group_apointments
    has_many :project_ticket_apointments, as: :appoint_to, dependent: :destroy
    has_many :project_tickets, through: :project_ticket_apointments
    has_many :project_subticket_apointments, as: :appoint_to, dependent: :destroy
    has_many :project_subtickets, through: :project_subticket_apointments
  end

end
