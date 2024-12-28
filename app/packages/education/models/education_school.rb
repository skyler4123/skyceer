class EducationSchool < ApplicationRecord
  include EducationSchool::AvatarConcern
  include EducationSchool::ImagesConcern

  belongs_to :user
  belongs_to :address, optional: true
  has_many :education_categories, dependent: :destroy
  has_many :education_rooms, dependent: :destroy
  has_many :education_classes, dependent: :destroy
  has_many :education_teachers, dependent: :destroy
  has_many :education_students, dependent: :destroy
  has_many :education_courses, dependent: :destroy
  has_many :education_exams, dependent: :destroy
  has_many :education_questions, dependent: :destroy
  has_many :education_subjects, dependent: :destroy
  has_many :education_lessons, dependent: :destroy
  has_many :education_shifts, dependent: :destroy

  include EducationSchool::PaymentUserConcern
end
