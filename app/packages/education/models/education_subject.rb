class EducationSubject < ApplicationRecord
  has_many :education_exams
  belongs_to :education_school

  has_many :education_class_appointments, as: :education_class_appointmentable, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_subject_appointments, dependent: :destroy
  has_many :education_teachers, through: :education_subject_appointments, source: :education_subject_appointmentable, source_type: 'EducationTeacher'
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationSubject::ValidationConcern
end
