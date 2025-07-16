json.extract! report_owner, :id, :report_ownerable_id, :report_ownerable_type, :discarded_at, :created_at, :updated_at
json.url report_owner_url(report_owner, format: :json)
