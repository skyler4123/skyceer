module ApplicationRecord::CacheConcern
  extend ActiveSupport::Concern

  included do
    def cache_key
      "#{self.class.name.downcase}_#{id}"
    end

    def cache!(expires_in: nil)
      expires_at = self.try(:expires_at) || Time.current + 5.minutes
      expires_in = expires_at - Time.current

      cache_key = self.cache_key
      Rails.cache.write(cache_key, self, expires_in: expires_in)
    end

    def self.fetch_from_cache(id)
      Rails.cache.fetch("#{name.downcase}_#{id}") do
        find(id)
      end
    end
  end
end