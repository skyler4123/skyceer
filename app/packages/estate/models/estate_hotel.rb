class EstateHotel < ApplicationRecord
  belongs_to :estate_user

  monetize :price_cents
end