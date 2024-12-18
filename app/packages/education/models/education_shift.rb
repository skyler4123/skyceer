class EducationShift < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_class
  belongs_to :education_subject
  belongs_to :education_teacher
end
