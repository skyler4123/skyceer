class EducationExamToClass < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_class

  # # Validation to ensure uniqueness of an appointment for an exam and appoint_to
  # validates :education_exam_id, uniqueness: { scope: [:appoint_to_type, :appoint_to_id], message: "already has an appointment for this class or student" }

  # after_create :assign_exam_to_students

  # enum :status, {
  #   pending: 0,
  #   passed: 1,
  #   failed: 2,
  #   absent: 3,
  #   finished: 4,
  # }

  # private

  # def assign_exam_to_students
  #   # Check if appoint_to is an EducationClass
  #   return unless appoint_to.is_a?(EducationClass)

  #   EducationExamAppointment::AsyncExamFromClassToStudentJob.perform_later(education_exam.id, appoint_to.id)
  # end
end
