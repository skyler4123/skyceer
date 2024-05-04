class CarStore < ApplicationRecord
  belongs_to :car_user
  has_many :car_car, dependent: :destroy
end
