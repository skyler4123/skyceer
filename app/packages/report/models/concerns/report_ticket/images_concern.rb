module ReportTicket::ImagesConcern
  extend ActiveSupport::Concern
  
  included do
    has_many_attached :image_attachments do |attachable|
      attachable.variant :full, resize_to_limit: [300, 300]
      attachable.variant :thumb, resize_to_limit: [50, 50]
    end
    
    # validates :images, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], dimension: { width: { min: 800, max: 2400 }, height: { min: 600, max: 1800 }, message: 'is not given between dimension' }
    
    validate :acceptable_image_attachment

    def acceptable_image_attachment
      return unless image_attachments.attached?
      if image_attachments.detect { |image_attachment| image_attachment.blob.byte_size > 500.kilobytes }
        errors.add(:image_attachments, "is too big (500KB)")
      end
      acceptable_types = ["image/jpeg", "image/png"]
      image_attachments.each do |image_attachment|
        unless acceptable_types.include?(image_attachment.content_type)
          errors.add(:image_attachments, "must be a JPEG or PNG")
        end
      end
    end
  end

end
