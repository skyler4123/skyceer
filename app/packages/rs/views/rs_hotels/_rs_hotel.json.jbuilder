json.extract! rs_hotel, :id, :rs_user_id, :name, :address, :price_cents, :longitude, :latitude, :created_at, :updated_at
json.url rs_hotel_url(rs_hotel, format: :json)
