class EducationCategory < ApplicationRecord
  include CategoryConcern

  belongs_to :user

  has_many :education_category_appointments, dependent: :destroy
  has_many :education_schools, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationSchool'
  has_many :education_courses, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationCourse'
  has_many :education_exams, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationExam'
  has_many :education_questions, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationQuestion'
  has_many :education_subjects, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationSubject'
  has_many :education_classes, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationClass'
  has_many :education_rooms, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationRoom'
  has_many :education_students, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationStudent'
  has_many :education_parents, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationParent'
  has_many :education_teachers, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationTeacher'
  has_many :education_admins, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationAdmin'
  has_many :education_lessons, through: :education_category_appointments, source: :appoint_to, source_type: 'EducationLesson'


  scope :first_level, -> { where(parent_category_id: nil) }

  include EducationCategory::ValidationConcern

end
