module User::ProjectConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :project_categories, dependent: :destroy
  end
end
