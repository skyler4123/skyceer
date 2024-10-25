json.extract! address, :id, :unit_number, :street_number, :address_line_1, :address_line_2, :city, :country_code, :postal_code, :latitude, :longitude, :created_at, :updated_at
json.url address_url(address, format: :json)
