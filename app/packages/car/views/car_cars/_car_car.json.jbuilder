json.extract! car_car, :id, :name, :model, :car_brand_id, :car_user_id, :price, :version, :coordinates, :released_at, :verified, :expired, :created_at, :updated_at
json.url car_car_url(car_car, format: :json)
