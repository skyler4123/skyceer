module User::ArticlePostImageConcern
  extend ActiveSupport::Concern
  
  included do
    has_many_attached :article_post_images do |attachable|
      attachable.variant :full, resize_to_limit: [300, 300]
      attachable.variant :thumb, resize_to_limit: [50, 50]
    end
    
    # validates :article_post_images, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], dimension: { width: { min: 800, max: 2400 }, height: { min: 600, max: 1800 }, message: 'is not given between dimension' }
    
    validate :acceptable_image

    def acceptable_image
      return unless article_post_images.attached?
      if article_post_images.detect { |image| image.blob.byte_size > 500.kilobytes }
        errors.add(:article_post_images, "is too big (500KB)")
      end
      acceptable_types = ["image/jpeg", "image/png"]
      article_post_images.each do |image|
        unless acceptable_types.include?(image.content_type)
          errors.add(:article_post_images, "must be a JPEG or PNG")
        end
      end
    end
  end
end
