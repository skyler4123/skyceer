module EducationCategory::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, length: { maximum: 255 }
    validates :nested_level, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  end

end
