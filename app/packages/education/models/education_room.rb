class EducationRoom < ApplicationRecord
  include EducationRoom::AvatarConcern
  include EducationRoom::ImagesConcern

  belongs_to :education_school

  has_many :education_class_appointments, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
end
