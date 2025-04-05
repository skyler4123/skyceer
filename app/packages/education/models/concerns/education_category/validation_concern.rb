module EducationCategory::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, uniqueness: { scope: :user_id, case_sensitive: true, message: "must be unique per user" }
    validates :nested_level, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
    validates :user, presence: true
  end

end
