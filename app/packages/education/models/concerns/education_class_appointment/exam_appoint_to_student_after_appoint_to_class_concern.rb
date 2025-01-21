module EducationClassAppointment::ExamAppointToStudentAfterAppointToClassConcern
  extend ActiveSupport::Concern
  
  included do
    after_create :exam_appoint_to_student_after_appoint_to_class

    private

    def exam_appoint_to_student_after_appoint_to_class
      return if (self.education_class_appointmentable_type != 'EducationExam')
      EducationClassAppointment::ExamAppointToStudentAfterAppointToClassJob.perform_later(self.id)
    end
  end

end
