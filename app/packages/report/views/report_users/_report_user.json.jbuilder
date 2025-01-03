json.extract! report_user, :id, :report_userable_id, :report_userable_type, :discarded_at, :created_at, :updated_at
json.url report_user_url(report_user, format: :json)
