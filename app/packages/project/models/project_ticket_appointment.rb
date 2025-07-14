class ProjectTicketAppointment < ApplicationRecord
  belongs_to :project_ticket
  belongs_to :appoint_to, polymorphic: true
end
