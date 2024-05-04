json.extract! car_store, :id, :name, :car_user_id, :coordinates, :created_at, :updated_at
json.url car_store_url(car_store, format: :json)
