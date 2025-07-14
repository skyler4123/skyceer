class ProjectSubticketAppointment < ApplicationRecord
  belongs_to :project_subticket
  belongs_to :appoint_to, polymorphic: true
end
