class EducationClass < ApplicationRecord
  belongs_to :education_school
  has_many :students
end
