class EducationClass < ApplicationRecord
  include EducationClass::AvatarConcern
  include EducationClass::ImagesConcern

  belongs_to :education_school

  has_many :education_class_appointments, dependent: :destroy
  has_many :education_students, through: :education_class_appointments
  has_many :education_teachers, through: :education_class_appointments
  has_many :education_subjects, through: :education_class_appointments
  
  has_many :education_rooms, through: :education_class_appointments


end