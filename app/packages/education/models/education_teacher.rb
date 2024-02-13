class EducationTeacher < ApplicationRecord
  belongs_to :education_user
  belongs_to :education_school, optional: true
end
