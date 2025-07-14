class ProjectGroup < ApplicationRecord
  belongs_to :project_ownerable, polymorphic: true
  has_many :project_group_appointments, dependent: :destroy
  has_many :project_tickets, dependent: :destroy
  has_many :project_subtickets, dependent: :destroy

  def members
    return EducationStaff.joins(:project_group_appointments).where(project_group_appointments: { project_group_id: id }) if project_ownerable_type == 'EducationSchool'

    project_group_appointments.map(&:appoint_to)
  end
end
