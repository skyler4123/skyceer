class EducationSchoolAppointment < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_admin, optional: true
  belongs_to :education_teacher, optional: true
  belongs_to :education_student, optional: true
end
