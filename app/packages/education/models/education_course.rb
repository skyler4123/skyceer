class EducationCourse < ApplicationRecord
  has_many :education_exams, dependent: :destroy
  belongs_to :education_school

  has_many :education_classes, dependent: :destroy
  
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationCourse::PaymentItemConcern
end
