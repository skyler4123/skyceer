module EducationSubject::ValidationConcern
  extend ActiveSupport::Concern

  included do
    validates :name, presence: true, uniqueness: { scope: :education_school_id, message: "must be unique within the same school" }
    validates :description, presence: true
  end
end
