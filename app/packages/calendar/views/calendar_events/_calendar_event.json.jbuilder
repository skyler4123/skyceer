json.extract! calendar_event, :id, :calendar_user_id, :name, :created_at, :updated_at
json.url calendar_event_url(calendar_event, format: :json)
