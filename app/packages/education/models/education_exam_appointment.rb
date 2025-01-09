class EducationExamAppointment < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_exam_appointmentable, polymorphic: true
end
