module EducationSchool::AvatarConcern
  extend ActiveSupport::Concern
  
  included do
    has_one_attached :avatar_attachment  do |attachable|
      attachable.variant :full, resize_to_limit: [300, 300]
      attachable.variant :thumb, resize_to_limit: [50, 50]
    end
    
    validate :acceptable_avatar_attachment

    def acceptable_avatar_attachment
      return unless avatar_attachment.attached?
      unless avatar_attachment.blob.byte_size <= 200.kilobytes
        errors.add(:avatar_attachment, "is too big (200KB)")
      end
  
      acceptable_types = ["image/jpeg", "image/png"]
      unless acceptable_types.include?(avatar_attachment.content_type)
        errors.add(:avatar_attachment, "must be a JPEG or PNG")
      end
    end
  end

end
