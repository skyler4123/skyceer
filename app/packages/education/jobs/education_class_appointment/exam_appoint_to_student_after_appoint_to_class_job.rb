class EducationClassAppointment::ExamAppointToStudentAfterAppointToClassJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue

  def perform(education_class_appointment_id)
    education_class_appointment = EducationClassAppointment.find(education_class_appointment_id)
    return if (education_class_appointment.education_class_appointmentable_type != 'EducationExam')

    education_class = education_class_appointment.education_class
    education_exam = education_class_appointment.education_class_appointmentable
    education_students = education_class.education_students
    education_students.each do |education_student|
      education_student.education_exams << education_exam
    end
  end

end
