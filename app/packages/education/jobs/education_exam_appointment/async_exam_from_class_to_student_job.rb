# class  < ApplicationJob
class EducationExamAppointment::AsyncExamFromClassToStudentJob < ApplicationJob

  def perform(education_exam_id, education_class_id)
    # Find the EducationExam and EducationClass
    education_exam = EducationExam.find(education_exam_id)
    education_class = EducationClass.find(education_class_id)
    # Find all students in the class
    students = education_class.education_students
    # Assign the exam to each student
    students.each do |student|
      EducationExamAppointment.find_or_create_by!(education_exam: education_exam, appoint_to: student) do |appointment|
        appointment.status = :pending
        # appointment.score = nil
      end
    end
  end
end
