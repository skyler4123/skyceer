class EducationSchool < ApplicationRecord
  belongs_to :education_user
  has_many :education_rooms
  has_many :education_classes
  has_many :education_teachers
  has_many :education_students
end
