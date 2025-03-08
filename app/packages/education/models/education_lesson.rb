class EducationLesson < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_class
  belongs_to :education_subject
  belongs_to :education_teacher
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationLesson::ValidationConcern
end
