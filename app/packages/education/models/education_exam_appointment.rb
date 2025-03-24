class EducationExamAppointment < ApplicationRecord
  belongs_to :education_exam
  belongs_to :appoint_to, polymorphic: true
end
