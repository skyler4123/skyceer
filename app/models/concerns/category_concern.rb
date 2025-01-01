module CategoryConcern
  extend ActiveSupport::Concern
  
  included do
    validate :parent_category_cannot_be_duplicate
    # before_destroy :remove_association
    # a category can have many child_categories.
    has_many :child_categories, class_name: self.name, foreign_key: "parent_category_id", dependent: :destroy
  
    # a category can have one parent category.
    belongs_to :parent_category, class_name: self.name, optional: true
    before_save :set_nested_level

    def set_nested_level
      self.nested_level = parent_category.present? ? parent_category.nested_level + 1 : 0
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
end
