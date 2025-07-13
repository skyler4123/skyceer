module EducationSchool::ProjectConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :project_groups, as: :project_group_ownerable, dependent: :destroy
    has_many :project_tickets, dependent: :destroy
    has_many :project_subtickets, dependent: :destroy
    has_many :project_categories, dependent: :destroy
  end

end
