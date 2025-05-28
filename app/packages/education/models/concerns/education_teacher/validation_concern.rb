module EducationTeacher::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true
    validates :email, presence: true, uniqueness: { case_sensitive: true, message: "must be unique" }
  end

end
