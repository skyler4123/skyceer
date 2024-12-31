class EducationCategory < ApplicationRecord
  before_save :set_level
  validate :parent_category_cannot_be_duplicate
  # before_destroy :remove_association
  # a category can have many child_categories.
  has_many :child_categories, class_name: "EducationCategory", foreign_key: "parent_category_id", dependent: :destroy

  # a category can have one parent category.
  belongs_to :parent_category, class_name: "EducationCategory", optional: true
  belongs_to :education_school

  has_many :education_category_appointments, dependent: :destroy
  has_many :education_courses, through: :education_category_appointments
  has_many :education_exams, through: :education_category_appointments
  has_many :education_questions, through: :education_category_appointments
  has_many :education_subjects, through: :education_category_appointments
  has_many :education_classes, through: :education_category_appointments
  has_many :education_rooms, through: :education_category_appointments
  has_many :education_students, through: :education_category_appointments
  has_many :education_teachers, through: :education_category_appointments
  has_many :education_shifts, through: :education_category_appointments
  has_many :education_lessons, through: :education_category_appointments

  def set_level
    self.level = parent_category.present? ? parent_category.level + 1 : 0
  end

  def parent_categories
    parent = self.parent_category
    parents = []
    visited = Set.new

    while parent
      break if visited.include?(parent.id) # Detect cycle
      parents << parent
      visited.add(parent.id)
      parent = parent.parent_category
    end

    parents
  end

  def children_categories
    children = []
    queue = [self]
    visited = Set.new

    until queue.empty?
      current = queue.shift
      next if visited.include?(current.id) # Detect cycle
      visited.add(current.id)
      children << current unless current == self
      queue.concat(current.child_categories)
    end

    children
  end

  def includes_all_children
    children = []
    children << self
    children << self.children_categories
    children.flatten
  end

  private

  def parent_category_cannot_be_duplicate
    if parent_categories.include?(self)
      errors.add(:parent_id, "cannot be a duplicate or create a cycle")
    end
  end

end
