class EducationQuestion < ApplicationRecord
  belongs_to :education_owner
  belongs_to :education_school, optional: true
  belongs_to :education_teacher, optional: true

  has_many :education_question_appointments, dependent: :destroy
  has_many :education_exams, through: :education_question_appointments, source: :appoint_to, source_type: 'EducationExam'

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
end
