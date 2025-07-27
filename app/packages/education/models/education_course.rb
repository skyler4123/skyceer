class EducationCourse < ApplicationRecord
  belongs_to :education_owner
  belongs_to :education_school

  has_many :education_classes, dependent: :destroy
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationCourse::ValidationConcern


  belongs_to :education_school

  # Validations

  # Association with user through education_school
end
