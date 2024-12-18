class EducationQuestion < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_teacher
  belongs_to :education_category, optional: true

  has_many :education_exam_question_appointments, dependent: :destroy
  has_many :education_exams, through: :education_exam_question_appointments
end
