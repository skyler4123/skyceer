class EducationExamToStudent < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_student
end
