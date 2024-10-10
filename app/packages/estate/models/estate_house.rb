class EstateHouse < ApplicationRecord
  include EstateHouse::ImagesConcern

  belongs_to :estate_user

  monetize :price_cents
end
