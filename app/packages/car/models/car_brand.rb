class CarBrand < ApplicationRecord
  has_many :car_car, dependent: :destroy
end
