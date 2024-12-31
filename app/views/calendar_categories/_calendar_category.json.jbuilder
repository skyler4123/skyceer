json.extract! calendar_category, :id, :name, :calendar_user_id, :parent_category_id, :discarded_at, :created_at, :updated_at
json.url calendar_category_url(calendar_category, format: :json)
