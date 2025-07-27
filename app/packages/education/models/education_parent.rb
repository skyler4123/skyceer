class EducationParent < ApplicationRecord
  belongs_to :education_owner
  belongs_to :user
  belongs_to :education_school

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  
  has_many :education_parent_appointments, dependent: :destroy
  has_many :education_students, through: :education_parent_appointments, source: :appoint_to, source_type: 'EducationStudent'
  
  include EducationParent::ImagesConcern
  include EducationParent::ValidationConcern
end
