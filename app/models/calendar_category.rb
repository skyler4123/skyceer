class CalendarCategory < ApplicationRecord
  belongs_to :calendar_user

  has_many :calendar_category_appointments, dependent: :destroy
  has_many :calendar_events, through: :calendar_category_appointments
  has_many :calendar_groups, through: :calendar_category_appointments

  validate :parent_category_cannot_be_duplicate
  # before_destroy :remove_association
  # a category can have many child_categories.
  has_many :child_categories, class_name: "CalendarCategory", foreign_key: "parent_category_id", dependent: :destroy

  # a category can have one parent category.
  belongs_to :parent_category, class_name: "CalendarCategory", optional: true

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
