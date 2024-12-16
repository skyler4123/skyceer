class EducationSubject < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school
  belongs_to :education_category, optional: true
end
