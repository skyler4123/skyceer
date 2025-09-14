module ArticlePost::ImagesConcern
  extend ActiveSupport::Concern

  included do
    def image_blocks
      if self.content && self.content[:blocks] && self.content[:blocks].size > 0
        return self.content[:blocks].select { |block| block[:type] == "image" }
      end
      []
    end

    def image_urls
      return [] if self.image_blocks.empty?
      self.image_blocks.map do |image_block|
        image_block[:data][:file][:url]
      end
    end
  end
end
