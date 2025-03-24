class EducationSubjectAppointment < ApplicationRecord
  belongs_to :education_subject
  belongs_to :appoint_from, polymorphic: true
  belongs_to :appoint_to, polymorphic: true
end
