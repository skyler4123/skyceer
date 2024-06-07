class CarCar < ApplicationRecord
  belongs_to :car_user
  belongs_to :car_store
end
