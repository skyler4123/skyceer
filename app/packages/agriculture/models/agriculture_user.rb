class AgricultureUser < ApplicationRecord
  belongs_to :user
  has_one :agriculture_farmer, dependent: :destroy
  has_one :agriculture_merchant, dependent: :destroy
end
