class EducationClassAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_class_appointmentable, polymorphic: true

  validates :education_class_id, presence: true, uniqueness: { scope: [:education_class_appointmentable_id, :education_class_appointmentable_type] }

  include EducationClassAppointment::ExamAppointToStudentAfterAppointToClassConcern
end
