class Address < ApplicationRecord
   validates :country_code, inclusion: { in: COUNTRY.pluck(:alpha_2_code) }
end
