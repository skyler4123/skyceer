class EducationSubjectAppointment < ApplicationRecord
  belongs_to :education_subject
  belongs_to :education_subject_appointmentable, polymorphic: true
end
