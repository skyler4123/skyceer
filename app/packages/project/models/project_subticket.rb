class ProjectSubticket < ApplicationRecord
  belongs_to :project_ticket
  has_many :project_subticket_appointments, dependent: :destroy
end
