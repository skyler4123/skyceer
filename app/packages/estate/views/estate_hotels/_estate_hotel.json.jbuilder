json.extract! estate_hotel, :id, :estate_user_id, :name, :address, :price_cents, :longitude, :latitude, :created_at, :updated_at
json.url estate_hotel_url(estate_hotel, format: :json)
