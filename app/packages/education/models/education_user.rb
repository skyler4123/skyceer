class EducationUser < ApplicationRecord
  belongs_to :user
  has_one :education_school, dependent: :destroy
  has_one :education_teacher, dependent: :destroy
  has_one :education_student, dependent: :destroy
end
