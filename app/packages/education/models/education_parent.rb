class EducationParent < ApplicationRecord
  belongs_to :user
  belongs_to :education_school_user, class_name: 'User'

  has_many :education_school_appointments, as: :education_school_appointmentable, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments
  
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  
  include EducationParent::ImagesConcern
  include EducationParent::ValidationConcern
end
