class EducationRoom < ApplicationRecord
  include EducationRoom::AvatarConcern
  include EducationRoom::ImagesConcern

  belongs_to :education_school

  has_many :education_class_appointments, as: :education_class_appointmentable, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
end
