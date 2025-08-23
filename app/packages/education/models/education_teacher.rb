class EducationTeacher < ApplicationRecord
  # include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :education_owner
  belongs_to :user, optional: true
  belongs_to :education_school

  has_many :education_questions, dependent: :destroy
  has_many :education_lessons, dependent: :destroy
  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  has_many :education_subject_appointments, dependent: :destroy
  has_many :education_subject_to_teachers, dependent: :destroy
  has_many :education_subjects, through: :education_subject_to_teachers

  include EducationTeacher::ValidationConcern
  include EducationTeacher::UserConcern
end
