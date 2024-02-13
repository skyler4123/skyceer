class EducationUser < ApplicationRecord
  belongs_to :user
  has_one :education_school
  has_one :education_teacher
  has_one :education_student
end
