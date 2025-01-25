module EducationAdmin::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :name, presence: true, length: { maximum: 255 }
    validates :email, presence: true, length: { maximum: 255 }
  end

end
