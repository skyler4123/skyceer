class EducationExam < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_teacher
  belongs_to :education_subject
  belongs_to :education_student
  belongs_to :education_category, optional: true
  belongs_to :education_course

  has_many :education_exam_question_appointments, dependent: :destroy
  has_many :education_questions, through: :education_exam_question_appointments
end
