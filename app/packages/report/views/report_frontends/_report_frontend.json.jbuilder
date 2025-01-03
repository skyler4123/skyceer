json.extract! report_frontend, :id, :report_user_id, :url, :cookie, :status, :discarded_at, :created_at, :updated_at
json.url report_frontend_url(report_frontend, format: :json)
