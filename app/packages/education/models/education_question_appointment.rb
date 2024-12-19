class EducationQuestionAppointment < ApplicationRecord
  belongs_to :education_question
  belongs_to :education_exam, optional: true
end
