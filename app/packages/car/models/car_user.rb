class CarUser < ApplicationRecord
  belongs_to :user
  has_many :car_stores, dependent: :destroy
end
