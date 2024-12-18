class EducationClassSubjectAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_subject
end
