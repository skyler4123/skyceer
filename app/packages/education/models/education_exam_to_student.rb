class EducationExamToStudent < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_student
  belongs_to :education_exam_to_class
end
