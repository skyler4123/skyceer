module EducationSchool::ProjectConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :project_groups, as: :project_ownerable, dependent: :destroy
  end

end
