class ProjectGroup < ApplicationRecord
  belongs_to :project_group_ownerable, polymorphic: true
end
