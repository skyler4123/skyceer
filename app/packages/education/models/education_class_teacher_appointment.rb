class EducationClassTeacherAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_teacher
end
