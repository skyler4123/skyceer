class VehicleStore < ApplicationRecord
  belongs_to :vehicle_user
  has_many :vehicle_car, dependent: :destroy
end
