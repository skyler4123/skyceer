class VehicleStore < ApplicationRecord
  belongs_to :user
  has_many :vehicle_car, dependent: :destroy
end
