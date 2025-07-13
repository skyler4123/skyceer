class ProjectCategoryAppointment < ApplicationRecord
  belongs_to :project_category
  belongs_to :appoint_to, polymorphic: true
end
