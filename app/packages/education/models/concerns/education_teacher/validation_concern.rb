module EducationTeacher::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, uniqueness: { scope: :education_school_user_id, message: "must be unique within the same school user" }
    validates :email, presence: true, uniqueness: { case_sensitive: true, message: "must be unique" }
  end

end
