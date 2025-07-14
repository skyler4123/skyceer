module EducationStaff::ProjectConcern
  extend ActiveSupport::Concern
  
  included do
    # has_many :project_group_appointments, as: :appoint_to, dependent: :destroy
    # has_many :project_groups, through: :project_group_appointments
    # has_many :project_ticket_appointments, as: :appoint_to, dependent: :destroy
    # has_many :project_tickets, through: :project_ticket_appointments
    # has_many :project_subticket_appointments, as: :appoint_to, dependent: :destroy
    # has_many :project_subtickets, through: :project_subticket_appointments
    has_one :project_member, as: :project_memberable, dependent: :destroy
  end

end
