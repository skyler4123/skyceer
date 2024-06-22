class VehicleUser < ApplicationRecord
  belongs_to :user
  has_one :session
  has_many :vehicle_stores, dependent: :destroy
end
