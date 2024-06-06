json.extract! user, :id, :email, :name, :verified, :created_at, :updated_at
json.url user_url(user, format: :json)
json.session_id user.sessions&.last&.id || ''
