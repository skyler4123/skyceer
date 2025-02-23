class EducationTeacher < ApplicationRecord
  # include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :user, optional: true
  
  has_many :education_school_appointments, as: :education_school_appointmentable, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments

  has_many :education_questions, dependent: :destroy
  has_many :education_lessons, dependent: :destroy

  has_many :education_class_appointments, as: :education_class_appointmentable, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  has_many :education_subject_appointments, as: :education_subject_appointmentable, dependent: :destroy
  has_many :education_subjects, through: :education_subject_appointments
  
  include EducationTeacher::ValidationConcern
  include EducationTeacher::UserConcern
end
