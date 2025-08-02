module ApplicationRecord::CacheConcern
  extend ActiveSupport::Concern

  included do
    def cache_key
      "#{self.class.name.downcase}/#{id}-#{updated_at.to_i}"
    end

    def cache!
      Rails.cache.write(cache_key, self)
    end
  end
end