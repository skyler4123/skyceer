class EstateHotel < ApplicationRecord
  include EstateHotel::ImagesConcern
  include EstateHotel::ElasticsearchConcern

  belongs_to :user
  belongs_to :address, optional: true

  monetize :price_cents
end
