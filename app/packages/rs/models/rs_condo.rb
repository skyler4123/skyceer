class RsCondo < ApplicationRecord
  belongs_to :rs_user

  monetize :price_cents
end
