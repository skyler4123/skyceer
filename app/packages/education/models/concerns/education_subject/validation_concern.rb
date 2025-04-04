module EducationSubject::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, length: { maximum: 255 }
    validates :description, presence: true, length: { maximum: 255 }
    validates :education_school, presence: true
    validates :name, uniqueness: { scope: :education_school_id, message: "must be unique within the same education school" }
  end

end
