class AgricultureFarmer < ApplicationRecord
  belongs_to :agriculture_user
  has_many :agriculture_farms, dependent: :destroy
end
