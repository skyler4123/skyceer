json.extract! vehicle_car, :id, :name, :model, :brand, :vehicle_user_id, :price, :version, :coordinates, :released_at, :verified, :expired, :created_at, :updated_at
json.url vehicle_car_url(vehicle_car, format: :json)
