json.extract! calendar_group, :id, :calendar_user_id, :calendar_groupable_id, :calendar_groupable_type, :name, :color, :borderColor, :backgroundColor, :dragBackgroundColor, :discarded_at, :created_at, :updated_at
json.url calendar_group_url(calendar_group, format: :json)
