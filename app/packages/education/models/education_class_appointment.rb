class EducationClassAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_teacher, optional: true
  belongs_to :education_student, optional: true
  belongs_to :education_subject, optional: true
  belongs_to :education_room, optional: true
end
