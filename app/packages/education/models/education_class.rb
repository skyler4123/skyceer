class EducationClass < ApplicationRecord
  include EducationClass::AvatarConcern
  include EducationClass::ImagesConcern

  belongs_to :education_owner
  belongs_to :education_school
  belongs_to :education_course

  has_many :education_lessons, dependent: :destroy
  has_many :education_class_appointments, dependent: :destroy
  has_many :education_students, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationStudent'
  has_many :education_teachers, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationTeacher'
  has_many :education_rooms, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationRoom'
  has_many :education_subjects, through: :education_class_appointments, source: :appoint_to, source_type: 'EducationSubject'
  
  has_many :education_exam_to_classes, -> { kept }, dependent: :destroy
  has_many :education_exams, through: :education_exam_to_classes
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_subject_appointments, dependent: :destroy

  include EducationClass::ValidationConcern
end