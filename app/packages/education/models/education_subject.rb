class EducationSubject < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school
  belongs_to :education_category, optional: true

  has_many :education_class_appointments, dependent: :destroy
  has_many :education_class, through: :education_class_appointments
  has_many :education_subject_teacher_appointments, dependent: :destroy
  has_many :education_teachers, through: :education_subject_teacher_appointments
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
end
