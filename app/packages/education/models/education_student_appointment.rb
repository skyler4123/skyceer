class EducationStudentAppointment < ApplicationRecord
  belongs_to :education_student
  belongs_to :appoint_to, polymorphic: true
end
