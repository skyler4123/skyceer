class EducationSubject < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school

  has_many :education_class_appointments, dependent: :destroy
  has_many :education_class, through: :education_class_appointments
  has_many :education_subject_appointments, dependent: :destroy
  has_many :education_teachers, through: :education_subject_appointments
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_shifts, dependent: :destroy

end
