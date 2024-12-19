class EducationCourse < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school
  belongs_to :education_category, optional: true
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
end
