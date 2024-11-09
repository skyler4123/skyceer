class EstateHouse < ApplicationRecord
  include EstateHouse::ImagesConcern
  include EstateHouse::ElasticsearchConcern
  
  belongs_to :user
  belongs_to :address, optional: true

  monetize :price_cents
end
