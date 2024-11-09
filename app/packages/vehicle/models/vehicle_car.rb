class VehicleCar < ApplicationRecord
  belongs_to :user
  belongs_to :vehicle_store

  enum :post_purpose, { sell: 0, rent: 1, sell_or_rent: 2 }
end
