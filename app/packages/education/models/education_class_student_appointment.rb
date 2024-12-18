class EducationClassStudentAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_student
end
