module EstateHotel::ImagesConcern
  extend ActiveSupport::Concern
  
  included do
    has_many_attached :images do |attachable|
      attachable.variant :full, resize_to_limit: [300, 300]
      attachable.variant :thumb, resize_to_limit: [50, 50]
    end
    
    # validates :images, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], dimension: { width: { min: 800, max: 2400 }, height: { min: 600, max: 1800 }, message: 'is not given between dimension' }
    
    validate :acceptable_image

    def acceptable_image
      return unless images.attached?
      if images.detect { |image| image.blob.byte_size > 500.kilobytes }
        errors.add(:images, "is too big (500KB)")
      end
      acceptable_types = ["image/jpeg", "image/png"]
      images.each do |image|
        unless acceptable_types.include?(image.content_type)
          errors.add(:images, "must be a JPEG or PNG")
        end
      end
    end
  end

end
