class CarCar < ApplicationRecord
  belongs_to :car_user
  belongs_to :car_store

  enum :post_purpose, { sell: 0, rent: 1, sell_or_rent: 2 }
end
