module ApplicationRecord::CacheConcern
  extend ActiveSupport::Concern

  included do
    def cache_key
      "#{self.class.name.downcase}_#{id}"
    end

    def cache!(expires_in: default_cache_expiration)
      Rails.cache.write(cache_key, self, expires_in: expires_in)
    end

    # Default expiration based on model type
    def default_cache_expiration
      case self.class.name
      when 'User'
        1.hour    # Users change less frequently
      when 'Session'
        5.minutes # Sessions need shorter cache
      when 'Article'
        2.hours   # Articles are relatively static
      else
        30.minutes # Default for other models
      end
    end

    # Remove from cache
    def uncache!
      Rails.cache.delete(cache_key)
    end

    # Check if cached
    def cached?
      Rails.cache.exist?(cache_key)
    end

    def self.fetch_from_cache(id)
      Rails.cache.fetch("#{name.downcase}_#{id}") do
        find(id)
      end
    end
  end
end