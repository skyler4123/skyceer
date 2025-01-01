class EducationCategory < ApplicationRecord
  include CategoryConcern

  belongs_to :education_school

  has_many :education_category_appointments, dependent: :destroy
  has_many :education_courses, through: :education_category_appointments
  has_many :education_exams, through: :education_category_appointments
  has_many :education_questions, through: :education_category_appointments
  has_many :education_subjects, through: :education_category_appointments
  has_many :education_classes, through: :education_category_appointments
  has_many :education_rooms, through: :education_category_appointments
  has_many :education_students, through: :education_category_appointments
  has_many :education_teachers, through: :education_category_appointments
  has_many :education_shifts, through: :education_category_appointments
  has_many :education_lessons, through: :education_category_appointments


end
