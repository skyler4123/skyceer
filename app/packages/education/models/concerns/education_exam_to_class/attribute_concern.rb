module EducationExamToClass::AttributeConcern
  extend ActiveSupport::Concern

  included do
    # Set default value for education_subject before validation
    before_validation :set_default_education_subject, on: :create

    private

    def set_default_education_subject
      self.education_subject ||= education_exam&.education_subject
    end
  end
end
