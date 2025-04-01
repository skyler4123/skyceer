class EducationClass < ApplicationRecord
  include EducationClass::AvatarConcern
  include EducationClass::ImagesConcern

  belongs_to :education_school
  belongs_to :education_course

  has_many :education_lessons, dependent: :destroy
  has_many :education_class_appointments, dependent: :destroy
  has_many :education_students, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationStudent'
  has_many :education_teachers, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationTeacher'
  has_many :education_subjects, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationSubject'
  has_many :education_rooms, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationRoom'
  has_many :education_exams, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationExam'

  # has_many :education_subject_appointments, as: :appoint_to, dependent: :destroy
  # has_many :education_subjects, through: :education_subject_appointments

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationClass::ValidationConcern
  include EducationClass::CalendarConcern
  include EducationClass::PaymentConcern

  # # Scope to get all teachers with subject appointments to this class
  # scope :education_teachers, -> {
  #   EducationTeacher.joins(:education_subject_appointments)
  #           .where(education_subject_appointments: { appoint_to_type: 'EducationClass', appoint_to_id: self.ids })
  #           .distinct
  # }

  # # Instance method to get all teachers with subject appointments to this class
  # def education_teachers
  #   EducationTeacher.joins(:education_subject_appointments)
  #                   .where(education_subject_appointments: { appoint_to: self})
  #                   .distinct
  # end
end