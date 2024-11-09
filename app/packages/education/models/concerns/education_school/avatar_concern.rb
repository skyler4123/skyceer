module EducationSchool::AvatarConcern
  extend ActiveSupport::Concern
  
  included do
    has_one_attached :avatar do |attachable|
      attachable.variant :full, resize_to_limit: [300, 300]
      attachable.variant :thumb, resize_to_limit: [50, 50]
    end
    
    validate :acceptable_avatar

    def acceptable_avatar
      return unless avatar.attached?
      unless avatar.blob.byte_size <= 200.kilobytes
        errors.add(:avatar, "is too big (200KB)")
      end
  
      acceptable_types = ["image/jpeg", "image/png"]
      unless acceptable_types.include?(avatar.content_type)
        errors.add(:avatar, "must be a JPEG or PNG")
      end
    end
  end

end
