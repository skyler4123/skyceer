class EducationRoom < ApplicationRecord
  include EducationRoom::AvatarConcern
  include EducationRoom::ImagesConcern

  belongs_to :education_owner
  belongs_to :education_school

  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationRoom::ValidationConcern
end
