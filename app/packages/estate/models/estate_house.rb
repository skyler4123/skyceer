class EstateHouse < ApplicationRecord
  include EstateHouse::ImagesConcern
  include EstateHouse::ElasticsearchConcern
  
  belongs_to :estate_user

  monetize :price_cents
end
