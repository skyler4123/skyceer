class Category < ApplicationRecord
  # a category can have many subcategories.
  has_many :subcategories, class_name: "Category", foreign_key: "parent_category_id", dependent: :destroy

  # a category can have one parent category.
  belongs_to :parent_category, class_name: "Category", optional: true
end
