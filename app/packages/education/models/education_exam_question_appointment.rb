class EducationExamQuestionAppointment < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_question
end
