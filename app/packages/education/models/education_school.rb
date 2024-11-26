class EducationSchool < ApplicationRecord
  include EducationSchool::AvatarConcern
  include EducationSchool::ImagesConcern

  belongs_to :user
  belongs_to :address, optional: true
  has_many :education_rooms, dependent: :destroy
  has_many :education_classes, dependent: :destroy
  has_many :education_teachers, dependent: :destroy
  has_many :education_students, dependent: :destroy
end
