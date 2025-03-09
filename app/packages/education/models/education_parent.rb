class EducationParent < ApplicationRecord
  belongs_to :user

  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  
  include EducationParent::ImagesConcern
end
