class Image < ApplicationRecord
	has_one_attached :image_attachment do |attachable|
    attachable.variant :full, resize_to_limit: [100, 100]
    attachable.variant :thumb, resize_to_limit: [50, 50]
  end

	validate :acceptable_image

	def acceptable_image
		return unless image_attachment.attached?
	
		unless image_attachment.blob.byte_size <= 1.megabyte
			errors.add(:image_attachment, "is too big")
		end
	
		acceptable_types = ["image/jpeg", "image/png"]
		unless acceptable_types.include?(image_attachment.content_type)
			errors.add(:image_attachment, "must be a JPEG or PNG")
		end
	end
end
 