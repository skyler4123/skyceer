json.extract! report_category, :id, :name, :parent_category_id, :nested_level, :discarded_at, :created_at, :updated_at
json.url report_category_url(report_category, format: :json)
