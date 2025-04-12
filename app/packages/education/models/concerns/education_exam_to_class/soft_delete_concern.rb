module EducationExamToClass::SoftDeleteConcern
  extend ActiveSupport::Concern
  
  included do
    include Discard::Model

    # Exclude soft-deleted records by default
    default_scope { kept }
  end

end
