class EstateHotel < ApplicationRecord
  include EstateHotel::ImagesConcern
  include EstateHotel::ElasticsearchConcern

  belongs_to :user
  belongs_to :address

  monetize :price_cents
end
