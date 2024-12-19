class EducationSubjectAppointment < ApplicationRecord
  belongs_to :education_subject
  belongs_to :education_teacher, optional: true
end
