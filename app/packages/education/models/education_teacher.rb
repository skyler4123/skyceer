class EducationTeacher < ApplicationRecord
  include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :user
  belongs_to :education_school

  has_many :education_questions, dependent: :destroy
  has_many :education_exams, dependent: :destroy

  has_many :education_class_appointments, dependent: :destroy
  has_many :education_class, through: :education_class_appointments
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  has_many :education_subject_appointments, dependent: :destroy
  has_many :education_subjects, through: :education_subject_appointments
  
  validates :user_id, uniqueness: { scope: :education_school_id, message: "This Teacher already have in this School" }
end
