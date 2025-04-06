class EducationSubject < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school

  has_many :education_subject_appointments, dependent: :destroy
  has_many :education_classes, through: :education_subject_appointments

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_exam_appointments, dependent: :destroy
  has_many :education_teachers, through: :education_subject_appointments

  include EducationSubject::ValidationConcern
end
