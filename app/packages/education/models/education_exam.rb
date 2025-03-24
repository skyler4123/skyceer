class EducationExam < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_subject

  has_many :education_question_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_questions, through: :education_question_appointments
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments

  has_many :education_exam_appointments, dependent: :destroy
  has_many :education_students, through: :education_exam_appointments, source: :appoint_to, source_type: 'EducationStudent'

  include EducationExam::ValidationConcern
end
