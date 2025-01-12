class EducationClassAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_class_appointmentable, polymorphic: true

  validates :education_class_id, presence: true, uniqueness: { scope: [:education_class_appointmentable_id, :education_class_appointmentable_type] }
  # Can be move to background job
  after_create :create_education_exam_appointments_on_students

  private

  def create_education_exam_appointments_on_students
    return if (self.education_class_appointmentable_type != 'EducationExam')
    education_exam = self.education_class_appointmentable
    education_class.education_students.each do |education_student|
      education_student.education_exams << education_exam
    end
  end
end
