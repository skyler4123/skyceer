class EducationCourse < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  has_many :education_class_appointments, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments

  include EducationCourse::PaymentConcern
end
