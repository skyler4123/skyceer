class EducationSubjectToTeacher < ApplicationRecord
  belongs_to :education_subject
  belongs_to :education_teacher
end
