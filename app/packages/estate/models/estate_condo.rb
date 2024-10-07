class EstateCondo < ApplicationRecord
  include EstateCondo::ImagesConcern

  belongs_to :estate_user

  monetize :price_cents
end
