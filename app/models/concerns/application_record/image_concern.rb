module ApplicationRecord::ImageConcern
  extend ActiveSupport::Concern
  
  included do

    def image_urls
      return [] unless self.images.attached?
  
      self.images.map { |image| Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true) }
    end

  end
end
