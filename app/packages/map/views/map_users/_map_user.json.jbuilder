json.extract! map_user, :id, :user_id, :name, :created_at, :updated_at
json.url map_user_url(map_user, format: :json)
