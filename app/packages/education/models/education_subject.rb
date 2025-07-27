class EducationSubject < ApplicationRecord
  belongs_to :education_owner
  belongs_to :education_school

  has_many :education_exams
  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  
  has_many :education_subject_to_teachers, dependent: :destroy
  has_many :education_teachers, through: :education_subject_to_teachers

  has_many :education_subject_appointments, dependent: :destroy

  include EducationSubject::ValidationConcern
end
