class EducationClass < ApplicationRecord
  include EducationClass::AvatarConcern
  include EducationClass::ImagesConcern

  belongs_to :education_school
  has_many :education_lessons, dependent: :destroy
  has_many :education_class_appointments, dependent: :destroy
  has_many :education_students, through: :education_class_appointments, source: :education_class_appointmentable, source_type: 'EducationStudent'
  has_many :education_teachers, through: :education_class_appointments, source: :education_class_appointmentable, source_type: 'EducationTeacher'
  has_many :education_subjects, through: :education_class_appointments, source: :education_class_appointmentable, source_type: 'EducationSubject'
  has_many :education_courses, through: :education_class_appointments, source: :education_class_appointmentable, source_type: 'EducationCourse'
  has_many :education_rooms, through: :education_class_appointments, source: :education_class_appointmentable, source_type: 'EducationRoom'
  
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_shifts, dependent: :destroy
  
  include EducationClass::CalendarConcern

end