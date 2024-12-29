module User::ImageInArticlePostConcern
  extend ActiveSupport::Concern
  
  included do
    has_many_attached :image_in_article_post_attachments do |attachable|
      attachable.variant :full, resize_to_limit: [300, 300]
      attachable.variant :thumb, resize_to_limit: [50, 50]
    end
    
    # validates :image_in_article_post_attachments, attached: true, content_type: ['image/png', 'image/jpg', 'image/jpeg'], dimension: { width: { min: 800, max: 2400 }, height: { min: 600, max: 1800 }, message: 'is not given between dimension' }
    
    validate :acceptable_image_in_article_post_attachment

    def acceptable_image_in_article_post_attachment
      return unless image_in_article_post_attachments.attached?
      if image_in_article_post_attachments.detect { |image_in_article_post_attachment| image_in_article_post_attachment.blob.byte_size > 500.kilobytes }
        errors.add(:image_in_article_post_attachments, "is too big (500KB)")
      end
      acceptable_types = ["image/jpeg", "image/png"]
      image_in_article_post_attachments.each do |image|
        unless acceptable_types.include?(image_in_article_post_attachment.content_type)
          errors.add(:image_in_article_post_attachments, "must be a JPEG or PNG")
        end
      end
    end
  end
end
