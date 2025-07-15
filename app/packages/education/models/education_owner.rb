class EducationOwner < ApplicationRecord
  belongs_to :user
  belongs_to :address, optional: true

  has_many :education_admins, dependent: :destroy
  has_many :education_teachers, dependent: :destroy
  has_many :education_students, dependent: :destroy
  has_many :education_parents, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
end
