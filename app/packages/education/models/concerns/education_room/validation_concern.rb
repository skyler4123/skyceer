module EducationRoom::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, length: { maximum: 255 }
    validates :education_school, presence: true
  end

end
