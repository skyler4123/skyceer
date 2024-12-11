class EducationCategory < ApplicationRecord
  # a category can have many subcategories.
  has_many :subcategories, class_name: "EducationCategory", foreign_key: "parent_education_category_id", dependent: :destroy

  # a category can have one parent category.
  belongs_to :parent_category, class_name: "EducationCategory", optional: true
  belongs_to :education_school
end
