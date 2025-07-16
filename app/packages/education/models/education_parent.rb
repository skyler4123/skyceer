class EducationParent < ApplicationRecord
  belongs_to :education_owner
  belongs_to :user
  belongs_to :education_school

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  
  include EducationParent::ImagesConcern
  include EducationParent::ValidationConcern
end
