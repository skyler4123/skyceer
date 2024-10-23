class EstateHouse < ApplicationRecord
  include EstateHouse::ImagesConcern
  include EstateHouse::ElasticsearchConcern
  
  belongs_to :estate_user
  belongs_to :address

  monetize :price_cents
end
