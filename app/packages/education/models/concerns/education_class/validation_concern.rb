module EducationClass::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, length: { maximum: 255 }
    validates :education_school, presence: true
    validates :education_course, presence: true
  end

end
