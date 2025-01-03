class EducationQuestionAppointment < ApplicationRecord
  belongs_to :education_question
  belongs_to :education_question_appointmentable, polymorphic: true
end
