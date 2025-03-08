module EducationCourse::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, length: { maximum: 255 }
  end

end
