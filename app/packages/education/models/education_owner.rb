class EducationOwner < ApplicationRecord
  belongs_to :user

  has_many :education_schools, dependent: :destroy
  has_many :education_admins, dependent: :destroy
  has_many :education_teachers, dependent: :destroy
  has_many :education_students, dependent: :destroy
  has_many :education_parents, dependent: :destroy
  has_many :education_categories, dependent: :destroy
  has_many :education_staffs, dependent: :destroy
  has_many :education_courses, dependent: :destroy
  has_many :education_classes, dependent: :destroy
  has_many :education_rooms, dependent: :destroy
  has_many :education_questions, dependent: :destroy
  has_many :education_exams, dependent: :destroy
  has_many :education_lessons, dependent: :destroy
end
