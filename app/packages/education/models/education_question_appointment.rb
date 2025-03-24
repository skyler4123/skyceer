class EducationQuestionAppointment < ApplicationRecord
  belongs_to :education_question
  belongs_to :appoint_to, polymorphic: true
end
