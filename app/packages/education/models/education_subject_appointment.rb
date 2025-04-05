class EducationSubjectAppointment < ApplicationRecord
  belongs_to :education_subject
  belongs_to :education_class
  belongs_to :education_teacher

  include EducationSubjectAppointment::ValidationConcern
end
