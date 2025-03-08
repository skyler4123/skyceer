class EducationCategory < ApplicationRecord
  include CategoryConcern

  belongs_to :education_school

  has_many :education_category_appointments, dependent: :destroy
  has_many :education_courses, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationCourse'
  has_many :education_exams, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationExam'
  has_many :education_questions, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationQuestion'
  has_many :education_subjects, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationSubject'
  has_many :education_classes, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationClass'
  has_many :education_rooms, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationRoom'
  has_many :education_students, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationStudent'
  has_many :education_teachers, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationTeacher'
  has_many :education_admins, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationAdmin'
  has_many :education_lessons, through: :education_category_appointments, source: :education_category_appointmentable, source_type: 'EducationLesson'


  scope :first_level, -> { where(parent_category_id: nil) }

  include EducationCategory::ValidationConcern

end
