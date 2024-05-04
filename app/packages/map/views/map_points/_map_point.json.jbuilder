json.extract! map_point, :id, :coordinates, :mapable_id, :mapable_type, :map_user_id, :verified, :expired, :created_at, :updated_at
json.url map_point_url(map_point, format: :json)
